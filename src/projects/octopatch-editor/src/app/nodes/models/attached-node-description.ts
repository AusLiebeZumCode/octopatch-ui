import { NodeDescription } from "./node-description";

export interface AttachedNodeDescription extends NodeDescription {
  parentKey: string;
}
