import { NodeDescription } from "./../../nodes/models/node-description";
import { ConnectionSettingsService } from "./connection-settings.service";
import { Injectable } from "@angular/core";
import {
  HubConnectionBuilder,
  LogLevel,
  HubConnection,
} from "@microsoft/signalr";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ConnectionService {
  private connection: HubConnection;
  connectionBuilder: HubConnectionBuilder;

  constructor(private settings: ConnectionSettingsService) {}

  public async start(): Promise<void> {
    this.connection = new HubConnectionBuilder()
      .withUrl(this.settings.url)
      .configureLogging(LogLevel.Trace)
      .withAutomaticReconnect()
      .build();
    await this.connection.start();
  }

  public async stop(): Promise<any> {
    await this.connection.stop();
  }

  public async getNodeDescriptions(): Promise<NodeDescription[]> {
    return await this.connection.invoke<NodeDescription[]>(
      "GetNodeDescriptions",
      {}
    );
  }
}
