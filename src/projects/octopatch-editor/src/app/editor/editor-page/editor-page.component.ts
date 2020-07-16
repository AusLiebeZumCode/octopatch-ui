import { EditorConfigurationService } from "./../services/editor-configuration.service";
import { NodeConfiguration } from "./../../nodes/models/node-configuration";
import {
  Component,
  OnInit,
  AfterViewInit,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  OnDestroy,
} from "@angular/core";
import { jsPlumb, jsPlumbInstance } from "jsplumb";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-editor-page",
  templateUrl: "./editor-page.component.html",
  styleUrls: ["./editor-page.component.scss"],
})
export class EditorPageComponent
  implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  private jsPlumbInstance: jsPlumbInstance;

  public nodeConfigurations: Array<NodeConfiguration>;
  public selectedNode: NodeConfiguration;
  loadPromise: Subscription;

  constructor(private editorConfigurations: EditorConfigurationService) {}

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

  ngAfterViewChecked(): void {
    console.log("view checked");
  }

  public selectNode(nodeId: string): void {
    this.selectedNode = this.nodeConfigurations.find((x) => x.id === nodeId);
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
