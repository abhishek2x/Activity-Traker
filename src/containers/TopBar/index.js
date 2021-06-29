import React from "react";
import AppBar from "@material-ui/core/AppBar";
import DotButton from "../../components/DotButton/index";
import mobile from "../../static/images/mobile.svg";
import "./style.scss";

export default function TopBar() {
  return (
    <AppBar className="root_appbar" position="static">
      <div>
        <h2 className="title">Abhishek Srivastava</h2>
      </div>
      <div className="second">
        <img className="mob" src={mobile} alt="icon" />
        {/* </div>
      <div> */}
        <DotButton />
      </div>
    </AppBar>
  );
}
