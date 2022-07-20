import { useEffect, useState } from "react";
import { sortBy, orderBy } from "lodash";
import styles from "../BookList/BookList.module.scss";

const BookList: React.FC<{ data: any }> = ({ data }) => {
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

  return (
    <>
      {data.length === 0 ? (
        <h1>No books found</h1>
      ) : (
        <>
          <div className={toolBar}>
            <div className={toolBar__item} onClick={() => handleSort("title")}>
              <h2> Sort Alphabetically</h2>
            </div>
            <div
              className={toolBar__item}
              onClick={() => handleSort("publishDate")}
            >
              <h2> Sort By Publication Date</h2>
            </div>
            <div
              className={toolBar__item}
              onClick={() => handleSort("authorName")}
            >
              <h2> Sort By Author</h2>
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
                  <h3>Publish : {item.publishDate}</h3>
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
