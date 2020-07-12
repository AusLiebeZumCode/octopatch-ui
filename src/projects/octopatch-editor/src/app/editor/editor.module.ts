import { NodesModule } from "./../nodes/nodes.module";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditorPageComponent } from "./editor-page/editor-page.component";

@NgModule({
  declarations: [EditorPageComponent],
  imports: [
    CommonModule,
    NodesModule,
    RouterModule.forChild([{ path: "", component: EditorPageComponent }]),
  ],
})
export class EditorModule {}
