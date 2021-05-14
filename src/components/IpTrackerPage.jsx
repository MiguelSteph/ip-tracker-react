import React, { Component } from "react";
import "../styles/ip-tracker-page.css";

class IpTrackerPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="header-section">
          <h1 className="header-text white-text-color header-margin">
            IP Address Tracker
          </h1>
        </div>
      </React.Fragment>
    );
  }
}

export default IpTrackerPage;
