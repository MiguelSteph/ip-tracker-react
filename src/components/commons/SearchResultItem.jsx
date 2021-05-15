import React, { Component } from "react";
import "../../styles/search-result-item.css";

const SearchResultItem = ({ name, value }) => {
  return (
    <div className="search-result-item-wrapper">
      <h3 className="search-result-item-name black-gray-text-color">{name}</h3>
      <p className="search-result-item-value black-gray-text-color">{value}</p>
    </div>
  );
};

export default SearchResultItem;
