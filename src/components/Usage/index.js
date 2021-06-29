import { Container } from "@material-ui/core";
import React from "react";
import "./style.scss";
import Phone from "../../static/images/adi-phone.svg";
import Laptop from "../../static/images/adi-laptop.svg";

function Devices() {
  return (
    <Container class="usage_root">
      <h4 className="head_title">Free-time Usage</h4>
      {/* <div className="inner_div">
        <img className="ad1_phone" src={Phone} alt="image" />
        <img className="ad1_laptop" src={Laptop} alt="image" />
      </div> */}
      <div className="bottom_div">
        <p className="bottom_link">Change Time Restrictions</p>
      </div>
    </Container>
  );
}

export default Devices;
