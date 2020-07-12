import { NodeConfiguration } from "./../../models/node-configuration";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "opui-node",
  templateUrl: "./node.component.html",
  styleUrls: ["./node.component.scss"],
})
export class NodeComponent implements OnInit {
  constructor() {}

  @Input() public configuration: NodeConfiguration;

  ngOnInit(): void {}
}
