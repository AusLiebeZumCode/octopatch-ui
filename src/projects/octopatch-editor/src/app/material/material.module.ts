import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatInputModule, MatButtonModule, MatDialogModule],
  exports: [MatInputModule, MatButtonModule, MatDialogModule],
})
export class MaterialModule {}
