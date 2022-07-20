export interface IBookList {
  docs: any[];
  numFound: number;
  numFoundExact: boolean;
  num_found: number;
  offset: null | number;
  q: string;
  start: number;
}

export interface IBookListItems extends Array<IBookList> {}
