import { ConnectorDescription } from "./connector-description";
import { KeyDescription } from "./key-description";
import { InputDescription } from "./input-description";
import { OutputDescription } from "./output-description";

export interface NodeDescription extends KeyDescription {
  nodeType: string;
  inputDescriptions: ConnectorDescription[];
  outputDescriptions: ConnectorDescription[];
}
