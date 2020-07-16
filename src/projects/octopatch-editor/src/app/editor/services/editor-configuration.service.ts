import { NodeConfiguration } from "./../../nodes/models/node-configuration";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EditorConfigurationService {
  private readonly configurationUrl = "assets/data/node-configuration.json";

  constructor(private http: HttpClient) {}

  public getConfigurations(): Observable<NodeConfiguration[]> {
    return this.http.get<NodeConfiguration[]>(this.configurationUrl);
  }
}
