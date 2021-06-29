import { Container, Paper, Grid } from "@material-ui/core";
import React from "react";
import Dropdown from "../../components/Dropdown/index";
import Donut from "../../components/Donut/index";
import Usage from "../../components/Usage/index";
import Devices from "../../components/Devices/index";
import "./style.scss";

function Box() {
  return (
    <Container className="root_box">
      <Paper className="paper_1">
        <Dropdown />
      </Paper>
      <Paper>
        <Grid
          container
          spacing={5}
          className="paper_2"
          alignContent="center"
          justify="center"
          alignItems="center"
        >
          <Grid className="list-item" item md={4} xs={12}>
            <Donut />
          </Grid>
          <Grid className="list-item" item md={4} xs={12}>
            <Usage />
          </Grid>
          <Grid className="list-item" item md={4} xs={12}>
            <Devices />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Box;
