import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./style.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Dropdown() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  // const [drop, setDrop] = useState({ title: "", data: "", isSelected: false });

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className="root_dropdown" className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-filled-label">Age</InputLabel> */}
        <Select
          disableUnderline={true}
          className="select_box"
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={5}>All</MenuItem>
          <MenuItem value={10}>Study-time Only</MenuItem>
          <MenuItem value={20}>Free-time Only</MenuItem>
          <MenuItem value={30}>Class-time Only</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
