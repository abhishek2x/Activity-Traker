import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Image1 from "../../static/images/Color.svg";
import Image2 from "../../static/images/Color-4.svg";
import Image3 from "../../static/images/Color-1.svg";

import "./style.scss";

export default function DotButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="btn"
      >
        <MoreHorizIcon />
      </Button>
      <Menu
        className="top_dropdown"
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className="list-ele">
          <img src={Image1} alt="icon-topp" />
          Add Device
        </MenuItem>
        <MenuItem onClick={handleClose} className="list-ele">
          <img src={Image2} alt="icon-topp" />
          Edit Details
        </MenuItem>
        <MenuItem onClick={handleClose} className="list-ele">
          <img src={Image3} alt="icon-topp" />
          Delete Child
        </MenuItem>
      </Menu>
    </div>
  );
}
