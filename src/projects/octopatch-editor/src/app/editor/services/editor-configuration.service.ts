import { NodeConfiguration } from "./../../nodes/models/node-configuration";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { NodeDescription } from "../../nodes/models/node-description";

@Injectable({
  providedIn: "root",
})
export class EditorConfigurationService {
  private readonly configurationUrl = "assets/data/node-configuration.json";

  constructor(private http: HttpClient) {}

  public getConfigurations(): Observable<NodeConfiguration[]> {
    return this.http.get<NodeConfiguration[]>(this.configurationUrl);
  }

  public getNodeDescriptions(): Observable<NodeDescription[]> {
    return this.http.get<NodeDescription[]>(
      "assets/data/node-descriptions.json"
    );
  }
}
