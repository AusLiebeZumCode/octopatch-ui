import { ToolboxService } from "./editor/services/toolbox.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "octopatch-editor";

  constructor(private toolbox: ToolboxService) {}

  toggleToolbox() {
    this.toolbox.toggle();
  }
}
