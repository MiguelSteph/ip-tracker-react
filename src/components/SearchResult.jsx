import React, { useContext } from "react";
import "../styles/search-result.css";
import SearchResultItem from "./commons/SearchResultItem";
import VerticalLine from "./commons/VerticalLine";
import LocationContext from "./contexts/LocationContext";

const SearchResult = () => {
  let locationContext = useContext(LocationContext);
  return (
    <div className="result-section-wrapper">
      <SearchResultItem
        name="IP ADDRESS"
        value={
          locationContext.data.ipAddress ? locationContext.data.ipAddress : "-"
        }
        canBreak={false}
      />
      <VerticalLine />
      <SearchResultItem
        name="LOCATION"
        value={
          locationContext.data.location ? locationContext.data.location : "-"
        }
        canBreak={true}
      />
      <VerticalLine />
      <SearchResultItem
        name="TIMEZONE"
        value={
          locationContext.data.timezone ? locationContext.data.timezone : "-"
        }
        canBreak={false}
      />
      <VerticalLine />
      <SearchResultItem
        name="ISP"
        value={locationContext.data.isp ? locationContext.data.isp : "-"}
        canBreak={true}
      />
    </div>
  );
};

export default SearchResult;
