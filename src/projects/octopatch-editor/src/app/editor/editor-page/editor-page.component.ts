import { Router } from "@angular/router";
import { ConnectionSettingsService } from "./../../octopatch/services/connection-settings.service";
import { ConnectionService } from "./../../octopatch/services/connection.service";
import { NodeDescription } from "./../../nodes/models/node-description";
import { ToolboxService } from "./../services/toolbox.service";
import { EditorConfigurationService } from "./../services/editor-configuration.service";
import { NodeConfiguration } from "./../../nodes/models/node-configuration";
import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { jsPlumb, jsPlumbInstance } from "jsplumb";
import { Subscription, Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { NodeEditorComponent } from "../../nodes/components/node-editor/node-editor.component";

@Component({
  selector: "app-editor-page",
  templateUrl: "./editor-page.component.html",
  styleUrls: ["./editor-page.component.scss"],
})
export class EditorPageComponent implements OnInit, AfterViewInit, OnDestroy {
  private jsPlumbInstance: jsPlumbInstance;
  private nodeCount: number;

  public nodeConfigurations: Array<NodeConfiguration>;
  public selectedNode: NodeConfiguration;
  loadPromise: Subscription;

  constructor(
    private toolbox: ToolboxService,
    private editorConfigurations: EditorConfigurationService,
    private matDialog: MatDialog,
    private settings: ConnectionSettingsService,
    private router: Router
  ) {}

  get toolboxOpen$(): Observable<boolean> {
    return this.toolbox.toolboxOpen$;
  }

  ngOnInit(): void {
    if (!this.settings.url) {
      this.router.navigate([""]);
      return;
    }
    this.loadPromise = this.editorConfigurations
      .getConfigurations()
      .subscribe((c) => {
        this.nodeConfigurations = c;
        this.nodeCount = c.length;
        setTimeout(() => this.initNodes(this.nodeConfigurations), 0);
      });
  }

  ngAfterViewInit(): void {
    this.initJsPlumb();
  }

  ngOnDestroy(): void {
    if (this.loadPromise) {
      this.loadPromise.unsubscribe();
    }
  }

  public selectNode(node: NodeConfiguration): void {
    console.log("select:", node);
    this.selectedNode = node;
  }

  public editNode(node: NodeConfiguration): void {
    console.log("edit:", node);
    this.matDialog.open(NodeEditorComponent, {
      panelClass: "op-node-editor-panel",
      disableClose: true,
      data: {
        node,
      },
    });
  }

  public createNewNode(nodeDescription: NodeDescription): void {
    const newNode = {
      id: `node${++this.nodeCount}`,
      name: `${nodeDescription.name} (new)`,
      type: nodeDescription,
      outputs: [],
      inputs: [],
      position: {
        left: 0,
        top: 0,
      },
    };
    // create node on the engine and add it afterwards
    this.nodeConfigurations.push(newNode);
    setTimeout(() => this.addNode(newNode));
  }

  public deleteNode(node: NodeConfiguration): void {
    console.log("delete:", node);
  }

  private initJsPlumb(): void {
    this.jsPlumbInstance = jsPlumb.getInstance({
      Container: "op-editor-page",
      DragOptions: {
        containment: "op-editor-page",
      },
    });
  }

  private initNodes(nodes: NodeConfiguration[]): void {
    this.jsPlumbInstance.reset();
    for (const node of nodes) {
      this.addNode(node);
    }
  }

  private addNode(node: NodeConfiguration): void {
    this.jsPlumbInstance.draggable(node.id);
    for (const input of node.inputs) {
      this.jsPlumbInstance.addEndpoint(input.id, {
        isTarget: true,
        isSource: false,
        maxConnections: 1,
        anchor: [0, 0, 0, 0, 20, 20],
        connectorClass: "connector",
        endpoint: ["Dot", { radius: 8, cssClass: "startpoint" }],
        paintStyle: { strokeWidth: 4, stroke: "white" },
      });
    }
    for (const output of node.outputs) {
      this.jsPlumbInstance.addEndpoint(output.id, {
        isTarget: false,
        isSource: true,
        maxConnections: 1,
        anchor: [1, 0, 0, 0, -20, 20],
        connectorClass: "connector",
        endpoint: [
          "Dot",
          { radius: 8, hoverClass: "endpointHover", cssClass: "endpoint" },
        ],
        paintStyle: { strokeWidth: 4, stroke: "white" },
      });
    }
    this.jsPlumbInstance.repaintEverything();
  }
}
