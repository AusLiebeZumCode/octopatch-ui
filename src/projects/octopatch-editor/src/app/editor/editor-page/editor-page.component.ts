import { NodeEditorComponent } from "./../../nodes/components/node-editor/node-editor.component";
import { EditorConfigurationService } from "./../services/editor-configuration.service";
import { NodeConfiguration } from "./../../nodes/models/node-configuration";
import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { jsPlumb, jsPlumbInstance } from "jsplumb";
import { Subscription } from "rxjs";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-editor-page",
  templateUrl: "./editor-page.component.html",
  styleUrls: ["./editor-page.component.scss"],
})
export class EditorPageComponent implements OnInit, AfterViewInit, OnDestroy {
  private jsPlumbInstance: jsPlumbInstance;

  public nodeConfigurations: Array<NodeConfiguration>;
  public selectedNode: NodeConfiguration;
  loadPromise: Subscription;

  constructor(
    private editorConfigurations: EditorConfigurationService,
    private matDialog: MatDialog
  ) {}

  ngOnDestroy(): void {
    if (this.loadPromise) {
      this.loadPromise.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.loadPromise = this.editorConfigurations
      .getConfigurations()
      .subscribe((c) => {
        this.nodeConfigurations = c;
        setTimeout(() => this.initNodes(this.nodeConfigurations), 0);
      });
  }

  ngAfterViewInit(): void {
    this.jsPlumbInstance = jsPlumb.getInstance({
      Container: "op-editor-page",
      DragOptions: {
        containment: "op-editor-page",
      },
    });
  }

  public selectNode(node: NodeConfiguration): void {
    console.log("select:", node);
    this.selectedNode = node;
  }

  public editNode(node: NodeConfiguration): void {
    console.log("edit:", node);
    const dialogRef = this.matDialog.open(NodeEditorComponent, {
      panelClass: "op-node-editor-panel",
    });
  }

  public deleteNode(node: NodeConfiguration): void {
    console.log("delete:", node);
  }

  private initNodes(nodes: NodeConfiguration[]): void {
    for (const node of nodes) {
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
}
