import { NodeConfiguration } from "./../../nodes/models/node-configuration";
import { Component, OnInit, AfterViewInit } from "@angular/core";
import { jsPlumb, jsPlumbInstance } from "jsplumb";
import { TitleCasePipe } from "@angular/common";

@Component({
  selector: "app-editor-page",
  templateUrl: "./editor-page.component.html",
  styleUrls: ["./editor-page.component.scss"],
})
export class EditorPageComponent implements OnInit, AfterViewInit {
  private jsPlumbInstance: jsPlumbInstance;
  private instances = [];

  nodeConfigurations: Array<NodeConfiguration>;
  constructor() {
    this.nodeConfigurations = [
      {
        id: "node1",
        name: "Node 1",
        inputs: [{ id: "node1_input1", name: "Input 1" }],
        outputs: [
          { id: "node1_output1", name: "Output 1" },
          { id: "node1_output2", name: "Output 2" },
        ],
        position: { top: 250, left: 150 },
      },
      {
        id: "node2",
        name: "Node 2",
        inputs: [
          { id: "node2_input1", name: "Input 1" },
          { id: "node2_input2", name: "Input 2" },
        ],
        outputs: [{ id: "node2_output1", name: "Output 1" }],
        position: { top: 450, left: 550 },
      },
    ];
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.jsPlumbInstance = jsPlumb.getInstance({});
    this.initNodes();
  }

  private initNodes(): void {
    this.jsPlumbInstance.setContainer("op-editor-page");
    for (const node of this.nodeConfigurations) {
      this.jsPlumbInstance.draggable(node.id);
      for (const input of node.inputs) {
        this.jsPlumbInstance.addEndpoint(input.id, {
          isTarget: true,
          isSource: false,
          maxConnections: 1,
          anchor: "LeftMiddle",
          endpoint: ["Dot", { radius: 5 }],
        });
      }
      for (const output of node.outputs) {
        this.jsPlumbInstance.addEndpoint(output.id, {
          isTarget: false,
          isSource: true,
          maxConnections: 1,
          anchor: "RightMiddle",
          endpoint: ["Dot", { radius: 5 }],
        });
      }
      this.jsPlumbInstance.repaintEverything();
    }
  }
}
