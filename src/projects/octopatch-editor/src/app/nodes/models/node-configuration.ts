import { InputEndpoint } from "./input-endpoint";
import { OutputEndpoint } from "./output-endpoint";

export interface NodeConfiguration {
  /**
   * the unique id of the node
   */
  id: string;
  /**
   * the displayed name of the node
   */
  name: string;
  inputs?: Array<InputEndpoint>;
  outputs?: Array<OutputEndpoint>;
}
