import React, { Component } from "react";
import "../styles/form.css";
import IconArrow from "../images/icon-arrow.svg";

const Form = () => {
  return (
    <form>
      <div className="input-text-form">
        <input
          className="input-field input-field-text black-gray-text-color"
          type="text"
          id="ipAddr"
          name="ipAddr"
          placeholder="Search for any IP address or domain"
        />
        <button className="black-bg-color arrow-icon-btn">
          <img src={IconArrow} />
        </button>
      </div>
    </form>
  );
};

export default Form;
