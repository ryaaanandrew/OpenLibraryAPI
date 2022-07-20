import { Dispatch } from "redux";
import { RootState } from "../../../redux/store/configureStore";
import { SearchBookActions } from "./searchBookSlice";

export const fetchBooksListAction =
  (searchQuery: string) =>
  async (dispatch: Dispatch, getState: () => RootState) => {
    try {
      const queryQuote = searchQuery?.replaceAll(" ", "+");
      dispatch(SearchBookActions.initiateFetchBooks());

      const result = await fetch(
        `https://openlibrary.org/search.json?q=${queryQuote}&limit=20`
      )
        .then((res) => {
          if (res.status === 200) return res.json();
        })
        .then(
          (result) => {
            return result;
          },
          (error) => {
            console.log("error: ", error);
          }
        );

      if (result !== null) {
        dispatch(SearchBookActions.fetchBooksSuccess({ result }));
      }
    } catch (e) {
      console.log("##### e: ", e);
      dispatch(SearchBookActions.initiateFetchBooks());
    }
  };
