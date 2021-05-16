import React from "react";
import "../styles/search-result.css";
import SearchResultItem from "./commons/SearchResultItem";
import VerticalLine from "./commons/VerticalLine";

const SearchResult = () => {
  return (
    <div className="result-section-wrapper">
      <SearchResultItem name="IP ADDRESS" value="192.212.174.101" />
      <VerticalLine />
      <SearchResultItem name="LOCATION" value="Brooklyn, NY 1001" />
      <VerticalLine />
      <SearchResultItem name="TIMEZONE" value="UTC-05:00" />
      <VerticalLine />
      <SearchResultItem name="ISP" value="SpaceX Starlink" />
    </div>
  );
};

export default SearchResult;
