import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ConnectionSettingsService {
  private connectionUrl: string; // = "https://localhost:5001/engineServiceHub";

  constructor() {}

  get url(): string {
    return this.connectionUrl;
  }

  setConnectionUrl(url: string): void {
    if (this.connectionUrl) {
      return;
    }
    this.connectionUrl = url;
  }
}
