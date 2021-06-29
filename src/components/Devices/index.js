import { Container } from "@material-ui/core";
import React from "react";
import "./style.scss";
import Phone from "../../static/images/adi-phone.svg";
import Laptop from "../../static/images/adi-laptop.svg";

function Devices() {
  return (
    <Container class="devices_root">
      <h4 className="head_title">By Devices</h4>
      <div className="inner_div">
        <img className="adi_phone" src={Phone} alt="adi phone" />
        <img className="adi_laptop" src={Laptop} alt="adi laptop" />
      </div>
      <div className="bottom_div">
        <p className="bottom_link"> See All Devices</p>
      </div>
    </Container>
  );
}

export default Devices;
