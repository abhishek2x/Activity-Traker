import { Container, Paper, Grid } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import Dropdown from "../../components/Dropdown/index";
import Donut from "../../components/Donut/index";
import Usage from "../../components/Usage/index";
import Devices from "../../components/Devices/index";
import "./style.scss";
import { SelectedContext } from "../../context/SelectedContext";

function Box() {
  const [UsageShow] = useContext(SelectedContext);

  useEffect(() => {
    console.log("Usage", UsageShow);
  }, [UsageShow]);

  return (
    <Container className="root_box">
      <Paper className="paper_1">
        <Dropdown />
      </Paper>
      <Paper className="content_box">
        <Grid container spacing={5} className="paper_2">
          <Grid className="list-item" item md={4} xs={12}>
            <Donut />
          </Grid>
          {UsageShow === 0 && (
            <Grid className="list-item" item md={4} xs={12}>
              <Usage />
            </Grid>
          )}
          <Grid className="list-item" item md={4} xs={12}>
            <Devices />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Box;
