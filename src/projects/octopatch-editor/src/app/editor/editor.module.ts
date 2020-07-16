import { NodesModule } from "./../nodes/nodes.module";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditorPageComponent } from "./editor-page/editor-page.component";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [EditorPageComponent],
  imports: [
    CommonModule,
    NodesModule,
    MatDialogModule,
    RouterModule.forChild([{ path: "", component: EditorPageComponent }]),
  ],
})
export class EditorModule {}
