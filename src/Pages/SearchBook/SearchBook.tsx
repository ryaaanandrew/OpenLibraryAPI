import { useState } from "react";
import { useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/Custominput/CustomInput";
import { useAppDispatch } from "../../redux/store/configureStore";
import BookList from "./components/BookList/BookList";
import styles from "./SearchBook.module.scss";
import { fetchBooksListAction } from "./utilities/searchBookSliceFunctions";

const SearchBook = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { container } = styles;
  const dispatch = useAppDispatch();
  const [isLoading, bookList] = useSelector((store: any) => {
    return [store.searchBookReducer.loading, store.searchBookReducer.bookList];
  });

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (!searchQuery) return;

    dispatch(fetchBooksListAction(searchQuery));
  };

  return (
    <div className={container} test-id={"searchBook-container"}>
      <h1>Open Library Search Tool</h1>
      <form onSubmit={(e: any) => handleSearch(e)}>
        <label htmlFor="search">
          <CustomInput
            type={"text"}
            name={"search"}
            handleChange={(e) => setSearchQuery(e)}
            placeholder={"Search here"}
          />
        </label>
        <CustomButton
          handleChange={(e: any) => handleSearch(e)}
          label={"Search"}
          extraStyles={{ marginLeft: "2rem" }}
        />
      </form>

      <BookList
        data={bookList}
        isLoading={isLoading}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default SearchBook;
