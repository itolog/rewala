import { FetchResult } from 'apollo-link';

export interface FieldsError {
  [ key: string ]: string[];
}

export interface RequestError {
  fields?: FieldsError[];
  message?: string;
  statusCode?: number;
}

export type GraphQLResponse<ResponseType> =
  FetchResult<{ errors: RequestError[], data: ResponseType }>
  & { data: ResponseType, errors: RequestError[] };
