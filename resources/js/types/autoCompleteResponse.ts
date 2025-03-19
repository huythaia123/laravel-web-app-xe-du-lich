export interface AutoCompleteResponse {
  predictions: Prediction[];
  execution_time: string;
  status: string;
}

export interface Prediction {
  description: string;
  matched_substrings: any[];
  place_id: string;
  reference: string;
  structured_formatting: StructuredFormatting;
  has_children: boolean;
  plus_code: PlusCode;
  compound: Compound;
  terms: Term[];
  types: string[];
  distance_meters: any;
}

export interface StructuredFormatting {
  main_text: string;
  main_text_matched_substrings: any[];
  secondary_text: string;
  secondary_text_matched_substrings: any[];
}

export interface PlusCode {
  compound_code: string;
  global_code: string;
}

export interface Compound {
  district: string;
  commune: string;
  province: string;
}

export interface Term {
  offset: number;
  value: string;
}
