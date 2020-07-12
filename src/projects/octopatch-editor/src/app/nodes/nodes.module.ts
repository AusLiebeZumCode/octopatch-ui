import { NodeComponent } from "./components/node/node.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [NodeComponent],
  exports: [NodeComponent],
  imports: [CommonModule],
})
export class NodesModule {}
