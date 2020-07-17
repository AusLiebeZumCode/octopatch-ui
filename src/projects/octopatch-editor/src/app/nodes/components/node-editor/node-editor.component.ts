import { NodeConfiguration } from "./../../models/node-configuration";
import { Component, OnInit, ViewEncapsulation, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-node-editor",
  templateUrl: "./node-editor.component.html",
  styleUrls: ["./node-editor.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class NodeEditorComponent implements OnInit {
  public nodeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NodeEditorComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { node: NodeConfiguration }
  ) {
    this.nodeForm = this.formBuilder.group({
      name: [this.node.name, Validators.required],
    });
  }

  get node(): NodeConfiguration {
    return this.data.node;
  }

  ngOnInit(): void {}

  save(): void {
    this.data.node = Object.assign(this.data.node, this.nodeForm.value);
    this.dialogRef.close();
  }
}
