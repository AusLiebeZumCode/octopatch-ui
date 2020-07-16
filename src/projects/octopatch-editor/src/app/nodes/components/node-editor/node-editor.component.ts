import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-node-editor",
  templateUrl: "./node-editor.component.html",
  styleUrls: ["./node-editor.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class NodeEditorComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  test(event: MouseEvent) {
    this.matDialog.open(NodeEditorComponent, {});
  }
}
