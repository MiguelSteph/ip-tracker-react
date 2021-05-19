import React, { Component } from "react";
import "../styles/ip-tracker-page.css";
import Form from "./Form";
import SearchResult from "./SearchResult";
import SearchResultMap from "./SearchResultMap";
import LocationContext from "./contexts/LocationContext";

class IpTrackerPage extends Component {
  state = {
    currentLocation: {},
  };

  /*
    ipAddress
    location
    timezone
    isp
    position => [Longitude, Latitude]
  */

  setLocation = (newLocation) => {
    this.setState({ currentLocation: newLocation });
  };

  render() {
    return (
      <LocationContext.Provider
        value={{
          data: this.state.currentLocation,
          setLocation: this.setLocation,
        }}
      >
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
      </LocationContext.Provider>
    );
  }
}

export default IpTrackerPage;
