import React from "react";
import "../../styles/search-result-item.css";

const SearchResultItem = ({ name, value, canBreak }) => {
  return (
    <div className="search-result-item-wrapper">
      <h3 className="search-result-item-name black-gray-text-color">{name}</h3>
      <p
        className={
          canBreak
            ? "search-result-item-value black-gray-text-color"
            : "search-result-item-value black-gray-text-color no-break"
        }
      >
        {value}
      </p>
    </div>
  );
};

export default SearchResultItem;
