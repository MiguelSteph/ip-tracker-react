import React, { Component } from "react";
import "../styles/ip-tracker-page.css";
import Form from "./Form";
import SearchResult from "./SearchResult";
import SearchResultMap from "./SearchResultMap";

class IpTrackerPage extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="header-section">
          <h1 className="header-text white-text-color header-margin">
            IP Address Tracker
          </h1>
          <Form />
          <div className="search-result-section">
            <SearchResult />
          </div>
        </div>
        <SearchResultMap />
      </React.Fragment>
    );
  }
}

export default IpTrackerPage;
