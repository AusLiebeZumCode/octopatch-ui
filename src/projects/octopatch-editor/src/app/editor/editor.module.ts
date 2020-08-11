import { MaterialModule } from "./../material/material.module";
import { NodesModule } from "./../nodes/nodes.module";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditorPageComponent } from "./editor-page/editor-page.component";
import { EditorToolboxComponent } from "./components/editor-toolbox/editor-toolbox.component";

@NgModule({
  declarations: [EditorPageComponent, EditorToolboxComponent],
  imports: [
    CommonModule,
    NodesModule,
    MaterialModule,
    RouterModule.forChild([{ path: "", component: EditorPageComponent }]),
  ],
})
export class EditorModule {}
