import { PropertyDescription } from "./property-description";
import { KeyDescription } from "./key-description";

export interface TypeDescription extends KeyDescription {
  propertyDescriptions: PropertyDescription[];
}
