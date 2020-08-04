import { ToolboxService } from "./../../services/toolbox.service";
import { NodeDescription } from "./../../../nodes/models/node-description";
import { EditorConfigurationService } from "./../../services/editor-configuration.service";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "opui-editor-toolbox",
  templateUrl: "./editor-toolbox.component.html",
  styleUrls: ["./editor-toolbox.component.scss"],
})
export class EditorToolboxComponent implements OnInit {
  @Output()
  public editorItemClicked = new EventEmitter<NodeDescription>();

  nodeDescriptions$: Observable<NodeDescription[]>;

  constructor(
    private editorConfiguration: EditorConfigurationService,
    private toolboxService: ToolboxService
  ) {
    this.nodeDescriptions$ = this.editorConfiguration.getNodeDescriptions();
  }

  ngOnInit(): void {}

  public handleItemClicked(nodeDescription: NodeDescription): void {
    this.editorItemClicked.emit(nodeDescription);
    this.toolboxService.toggle();
  }
}
