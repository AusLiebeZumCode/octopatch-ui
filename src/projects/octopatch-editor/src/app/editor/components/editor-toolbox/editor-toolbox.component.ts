import { ConnectionService } from "./../../../octopatch/services/connection.service";
import { ToolboxService } from "./../../services/toolbox.service";
import { NodeDescription } from "./../../../nodes/models/node-description";
import { EditorConfigurationService } from "./../../services/editor-configuration.service";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

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
    private toolboxService: ToolboxService,
    private connection: ConnectionService,
    private router: Router
  ) {
    this.nodeDescriptions$ = this.editorConfiguration.nodeDescriptions$;
  }

  ngOnInit(): void {
    this.editorConfiguration.getNodeDescriptions();
  }

  public handleItemClicked(nodeDescription: NodeDescription): void {
    this.editorItemClicked.emit(nodeDescription);
    this.toolboxService.toggle();
  }

  public async disconnect(): Promise<any> {
    await this.connection.stop();
    this.router.navigate([""]);
  }
}
