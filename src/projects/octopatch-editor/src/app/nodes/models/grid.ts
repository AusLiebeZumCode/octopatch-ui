import { NodeInstance } from "./node-instance";
import { WireInstance } from "./wire-instance";

export interface Grid {
  /**
   * Name of the grid
   */
  name: string;
  /**
   * Optional description for this grid
   */
  description: string;

  /**
   * List of node instances
   */
  nodeInstances: Array<NodeInstance>;

  /**
   * List of wire instances
   */
  wireInstances: Array<WireInstance>;
}
