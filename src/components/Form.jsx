import React, { Component } from "react";
import "../styles/form.css";
import "../styles/loader.css";
import IconArrow from "../images/icon-arrow.svg";
import validatorService from "../services/IpAndDomainValidator";
import { geoLocalisation } from "../services/LocalisationService";
import LocationContext from "./contexts/LocationContext";

class Form extends Component {
  state = {
    data: { ipAddr: "" },
    isValidIpAddress: true,
    ipAddress: "",
    fetchingData: false,
  };

  handleChange = (e) => {
    const { value } = e.target;
    const currentState = { ...this.state };
    if (
      validatorService.isValidateIpAddr(value) ||
      validatorService.isValidateDomain(value)
    ) {
      currentState.isValidIpAddress = true;
      currentState.data.ipAddr = value;
    } else {
      currentState.isValidIpAddress = false;
      currentState.data.ipAddr = value;
    }
    this.setState(currentState);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { ipAddr } = this.state.data;
    const currentState = { ...this.state };
    if (
      validatorService.isValidateIpAddr(ipAddr) ||
      validatorService.isValidateDomain(ipAddr)
    ) {
      this.setState({ fetchingData: true });
      currentState.isValidIpAddress = true;
      currentState.data.ipAddr = ipAddr;
      currentState.fetchingData = false;

      const { data } = await geoLocalisation(ipAddr);
      const location = {
        ipAddress: data.ip,
        location: `${data.location.city}, ${data.location.region} ${data.location.geonameId}`,
        timezone: `UTC ${data.location.timezone}`,
        isp: data.isp,
        position: [data.location.lat, data.location.lng],
      };

      this.context.setLocation(location);
    } else {
      currentState.isValidIpAddress = false;
    }
    this.setState(currentState);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-text-form">
          <input
            className={
              this.state.isValidIpAddress
                ? "input-field input-field-text black-gray-text-color"
                : "input-field input-field-text black-gray-text-color invalid-input-field"
            }
            type="text"
            id="ipAddr"
            name="ipAddr"
            disabled={this.state.fetchingData}
            value={this.state.data.ipAddr}
            onChange={(event) => this.handleChange(event)}
            placeholder="Search for any IP address or domain"
          />
          <button
            type="submit"
            disabled={!this.state.isValidIpAddress || this.state.fetchingData}
            className="black-bg-color arrow-icon-btn"
          >
            <img src={IconArrow} alt="Arrow" />
          </button>
        </div>

        {this.state.fetchingData && (
          <div className="loader-wrapper">
            <div className="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </form>
    );
  }
}
Form.contextType = LocationContext;

export default Form;
