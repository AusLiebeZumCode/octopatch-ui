import { NodeComponent } from "./components/node/node.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NodeEditorComponent } from './components/node-editor/node-editor.component';

@NgModule({
  declarations: [NodeComponent, NodeEditorComponent],
  exports: [NodeComponent],
  imports: [CommonModule],
})
export class NodesModule {}
