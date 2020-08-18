import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "opui-endpoint-selection",
  templateUrl: "./endpoint-selection.component.html",
  styleUrls: ["./endpoint-selection.component.scss"],
})
export class EndpointSelectionComponent implements OnInit {
  @Output()
  public endpointSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  connect(url: string): void {
    this.endpointSelected.emit(url);
  }
}
