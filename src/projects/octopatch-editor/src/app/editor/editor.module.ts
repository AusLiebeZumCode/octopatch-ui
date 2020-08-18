import { OctopatchModule } from "./../octopatch/octopatch.module";
import { MaterialModule } from "./../material/material.module";
import { NodesModule } from "./../nodes/nodes.module";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditorPageComponent } from "./editor-page/editor-page.component";
import { EditorToolboxComponent } from "./components/editor-toolbox/editor-toolbox.component";
import { ConnectionPageComponent } from "./connection-page/connection-page.component";

@NgModule({
  declarations: [
    EditorPageComponent,
    EditorToolboxComponent,
    ConnectionPageComponent,
  ],
  imports: [
    CommonModule,
    OctopatchModule,
    NodesModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: "",
        component: ConnectionPageComponent,
      },
      {
        path: "editor",
        component: EditorPageComponent,
      },
    ]),
  ],
})
export class EditorModule {}
