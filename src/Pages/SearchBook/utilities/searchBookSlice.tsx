import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { IBookList } from "./types";

interface CounterState {
  loading: boolean;
  bookList: [];
}

const initialState: CounterState = {
  loading: false,
  bookList: [],
};

const fetchBooksSlice = {
  initiateFetchBooks: (state: any, action: PayloadAction) => {
    state.loading = true;
  },
  fetchBooksSuccess: (state: any, action: PayloadAction<any>) => {
    const {
      result: { docs },
    } = action.payload;

    const mappedResult = docs.map((item: any) => {
      return {
        ...item,
        publishDate: moment(item.publish_date?.[0]).format("YYYY-MM-DD"),
        authorName: item.author_name?.[0],
      };
    });
    state.loading = false;
    state.bookList = mappedResult;
  },
  fetchBooksError: (state: any, action: PayloadAction) => {
    state.loading = true;
  },
};

const searchBook = createSlice({
  name: "searchBook",
  initialState,
  reducers: {
    ...fetchBooksSlice,
  },
});

export const SearchBookActions = searchBook.actions;
export default searchBook.reducer;
