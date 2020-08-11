import { NodeDescription } from "./node-description";
import { InputEndpoint } from "./input-endpoint";
import { OutputEndpoint } from "./output-endpoint";
import { NodePosition } from "./node-position";

export interface NodeConfiguration {
  /**
   * the unique id of the node
   */
  id: string;
  /**
   * the displayed name of the node
   */
  type: NodeDescription;
  name: string;
  inputs?: Array<InputEndpoint>;
  outputs?: Array<OutputEndpoint>;
  position?: NodePosition;
}
