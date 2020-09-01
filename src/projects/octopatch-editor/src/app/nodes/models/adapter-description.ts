import { KeyDescription } from "./key-description";

export interface SupportedTypeCombination {
  input: string;
  output: string;
}

export interface AdapterDescription extends KeyDescription {
  supportedTypeCombinations: SupportedTypeCombination[];
}
