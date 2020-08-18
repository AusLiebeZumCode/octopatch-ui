import { ConnectionService } from "./../../octopatch/services/connection.service";
import { ConnectionSettingsService } from "./../../octopatch/services/connection-settings.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-connection-page",
  templateUrl: "./connection-page.component.html",
  styleUrls: ["./connection-page.component.scss"],
})
export class ConnectionPageComponent implements OnInit {
  constructor(
    private connectionSettings: ConnectionSettingsService,
    private connection: ConnectionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async configureEndpoint(url: string): Promise<void> {
    this.connectionSettings.setConnectionUrl(url);
    await this.connection
      .start()
      .then((success) => {
        this.router.navigate(["editor"]);
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  }
}
