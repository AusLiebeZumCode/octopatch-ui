import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ToolboxService {
  private toolboxOpen = false;
  private toolboxOpenSubject = new BehaviorSubject<boolean>(this.toolboxOpen);

  constructor() {}

  get toolboxOpen$(): Observable<boolean> {
    return this.toolboxOpenSubject.asObservable();
  }

  public toggle(): void {
    this.toolboxOpen = !this.toolboxOpen;
    this.toolboxOpenSubject.next(this.toolboxOpen);
  }
}
