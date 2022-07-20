import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import SearchBook from "../SearchBook";
import rootReducer from "../../../redux/store/store";

const store = configureStore({ reducer: rootReducer });

test("SearchBook should match snapshot", () => {
  const view = render(
    <Provider store={store}>
      <SearchBook label={"Search"} />
    </Provider>
  );

  expect(view).toMatchSnapshot();
  expect(screen.getByText("Open Library Search Tool")).toBeTruthy();
});
