import { KeyDescription } from "./key-description";
import { ContentType } from "./content-type";

export interface PropertyDescription extends KeyDescription {
  contentType: ContentType;
}
