import { Container } from "@material-ui/core";
import React from "react";
import "./style.scss";
import Phone from "../../static/images/adi-phone.svg";
import Laptop from "../../static/images/adi-laptop.svg";
import Usage from "../../static/images/Usage.svg";

function Devices() {
  return (
    <Container class="usage_root">
      <h4 className="head_title">Free-time Usage</h4>
      <img className="activity_image" src={Usage} alt="Activity" />
      <div className="bottom_div">
        <p className="bottom_link">Change Time Restrictions</p>
      </div>
    </Container>
  );
}

export default Devices;
