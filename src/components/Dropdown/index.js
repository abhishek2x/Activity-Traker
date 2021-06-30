import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import { ContentContext } from "../../context/ContentContext";
import { SelectedContext } from "../../context/SelectedContext";
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
  const [data, setData] = useContext(ContentContext);
  const [isAllSelected, setIsAllSelected] = useContext(SelectedContext);

  const [selected, setSelected] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (event) => {
    const sample = data;
    sample.forEach((element) => {
      element.is_selected = false;
    });

    console.log("Selected: ", event.target.value);
    setSelected(event.target.value);
    if (event.target.value === "All") {
      setIsAllSelected(0);
    } else if (event.target.value === "Class-time only") {
      setIsAllSelected(1);
    } else if (event.target.value === "Study-time only") {
      setIsAllSelected(2);
    } else if (event.target.value === "Free-time only") {
      setIsAllSelected(3);
    }

    sample.forEach((element) => {
      if (element.title === event.target.value) {
        element.is_selected = true;
      }
    });
    setData(sample);
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
          value={selected}
          onChange={handleChange}
          onOpen={() => setIsExpanded(true)}
          onClose={() => setIsExpanded(false)}
        >
          {data &&
            !isExpanded &&
            data.map((item) => (
              <MenuItem value={item.title}>{item.title}</MenuItem>
            ))}
          {data &&
            isExpanded &&
            data.map((item, index) => (
              <MenuItem id={item.id} value={item.title}>
                {item.title === "All" && (
                  <h3 className="drop_head">
                    Activities during which time is shown ?
                  </h3>
                )}
                <br className="break" />
                <div className="box_flex">
                  <div className="box_flex_1">
                    <p className="drop_head">{item.title}</p>
                    <p className="item_desc">{item.desc}</p>
                  </div>
                  <div className="box_flex_2">
                    <Radio checked={item.is_selected} />
                  </div>
                </div>
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
