import { InputDescription } from "./input-description";
import { OutputDescription } from "./output-description";

export interface NodeDescription {
  guid: string;
  name: string;
  description: string;
  typeName: string;
  version: string;
  inputDescriptions?: InputDescription[];
  outputDescriptions?: OutputDescription[];
}
