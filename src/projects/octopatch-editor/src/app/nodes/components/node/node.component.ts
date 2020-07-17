import { NodeConfiguration } from "./../../models/node-configuration";
import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Host,
  EventEmitter,
  Output,
} from "@angular/core";

@Component({
  selector: "opui-node",
  templateUrl: "./node.component.html",
  styleUrls: ["./node.component.scss"],
})
export class NodeComponent implements OnInit {
  @Output() public selectClick = new EventEmitter<NodeConfiguration>();
  @Output() public editClick = new EventEmitter<NodeConfiguration>();
  @Output() public deleteClick = new EventEmitter<NodeConfiguration>();

  constructor() {}

  @HostBinding("class") public className = "op-node";

  @HostBinding("class.op-node-selected")
  public isNodeSelected = false;

  @HostBinding("style.top")
  public get top(): string {
    return `${this.configuration.position.top}px`;
  }
  public set top(value: string) {
    this.configuration.position.top = Number(
      value.substring(0, value.length - 2)
    );
  }

  @HostBinding("style.left")
  public get left(): string {
    return `${this.configuration.position.left}px`;
  }
  public set left(value: string) {
    this.configuration.position.left = Number(
      value.substring(0, value.length - 2)
    );
  }

  @Input() public configuration: NodeConfiguration;

  @Input()
  public get selected(): boolean {
    return this.isNodeSelected;
  }
  public set selected(value: boolean) {
    this.isNodeSelected = value;
  }

  ngOnInit(): void {}

  public select(event: MouseEvent): void {
    event.stopPropagation();
    this.selectClick.emit(this.configuration);
  }

  public edit(event: MouseEvent): void {
    event.stopPropagation();
    this.editClick.emit(this.configuration);
  }

  public delete(event: MouseEvent): void {
    event.stopPropagation();
    this.deleteClick.emit(this.configuration);
  }
}
