import { MaterialModule } from "./../material/material.module";
import { NodeComponent } from "./components/node/node.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NodeEditorComponent } from "./components/node-editor/node-editor.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [NodeComponent, NodeEditorComponent],
  exports: [NodeComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
})
export class NodesModule {}
