import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./../material/material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EndpointSelectionComponent } from "./components/endpoint-selection/endpoint-selection.component";

@NgModule({
  declarations: [EndpointSelectionComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [EndpointSelectionComponent],
})
export class OctopatchModule {}
