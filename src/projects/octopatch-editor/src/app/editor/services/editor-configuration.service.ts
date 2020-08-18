import { NodeDescription } from "./../../nodes/models/node-description";
import { ConnectionService } from "./../../octopatch/services/connection.service";
import { NodeConfiguration } from "./../../nodes/models/node-configuration";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EditorConfigurationService {
  private readonly configurationUrl = "assets/data/node-configuration.json";
  private nodeDescriptionSubject = new Subject<NodeDescription[]>();

  get nodeDescriptions$(): Observable<NodeDescription[]> {
    return this.nodeDescriptionSubject.asObservable();
  }

  constructor(
    private http: HttpClient,
    private connection: ConnectionService
  ) {}

  public getConfigurations(): Observable<NodeConfiguration[]> {
    return this.http.get<NodeConfiguration[]>(this.configurationUrl);
  }

  public getNodeDescriptions(): void {
    this.connection
      .getNodeDescriptions()
      .then((result) => this.nodeDescriptionSubject.next(result));
    // return this.http.get<NodeDescription[]>(
    //   "assets/data/node-descriptions.json"
    // );
  }
}
