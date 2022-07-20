import { useEffect, useState } from "react";
import { sortBy, orderBy } from "lodash";
import styles from "../BookList/BookList.module.scss";
import moment from "moment";

const BookList: React.FC<{ data: any; isLoading: boolean }> = ({
  data,
  isLoading,
}) => {
  const [sortMethod, setSortMethod] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const {
    bookItem,
    bookItem__bookCoverPlaceholder,
    bookItem__bookCover,
    bookItem__details,
    toolBar,
    toolBar__item,
  } = styles;

  const sortedData = sortMethod
    ? orderBy(data, [sortMethod], [sortDirection])
    : data;

  const handleSort = (name: string) => {
    if (sortMethod === name) {
      if (sortDirection === "asc") setSortDirection("desc");
      if (sortDirection === "desc") setSortDirection("asc");
    }

    setSortMethod(name);
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      {data.length === 0 ? (
        <h1>No books found</h1>
      ) : (
        <>
          <div className={toolBar}>
            <div className={toolBar__item} onClick={() => handleSort("title")}>
              <h2>Sort by title</h2>
            </div>
            <div
              className={toolBar__item}
              onClick={() => handleSort("publishDate")}
            >
              <h2>Sort by date</h2>
            </div>
            <div
              className={toolBar__item}
              onClick={() => handleSort("authorName")}
            >
              <h2>Sort by author</h2>
            </div>
          </div>
          {sortedData.map((item: any) => {
            return (
              <div key={item.key} className={bookItem}>
                <div className={bookItem__bookCoverPlaceholder}>
                  <img
                    src={`https://covers.openlibrary.org/b/isbn/${item.isbn?.[0]}-M.jpg`}
                    alt={`Book cover for ${item.title}`}
                    className={bookItem__bookCover}
                  />
                </div>

                <div className={bookItem__details}>
                  <h3>Title: {item.title}</h3>
                  <h3>Author: {item.author_name?.[0]}</h3>
                  <h3>
                    Publication Date:{" "}
                    {moment(item.publishDate).format("MMM, DD, YYYY")}
                  </h3>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default BookList;
