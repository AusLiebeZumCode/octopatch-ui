import { NodeConfiguration } from "./../../nodes/models/node-configuration";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-editor-page",
  templateUrl: "./editor-page.component.html",
  styleUrls: ["./editor-page.component.scss"],
})
export class EditorPageComponent implements OnInit {
  nodeConfigurations: Array<NodeConfiguration>;
  constructor() {
    this.nodeConfigurations = [
      {
        id: "node1",
        name: "Node 1",
        inputs: [{ id: "node1_input1", name: "Input 1" }],
        outputs: [{ id: "node1_output1", name: "Output 1" }],
      },
      {
        id: "node2",
        name: "Node 2",
        inputs: [{ id: "node2_input1", name: "Input 1" }],
        outputs: [{ id: "node2_output1", name: "Output 1" }],
      },
    ];
  }

  ngOnInit(): void {}
}
