import { Container } from "@material-ui/core";
import React, { useContext, useState } from "react";
import "./style.scss";
import Chart from "../Chart/index";
import { SelectedContext } from "../../context/SelectedContext";
import {
  ALL_CHART,
  CLASS_CHART,
  STUDY_CHART,
  FREE_CHART,
  ALL_BG_COLOR,
  CLASS_BG_COLOR,
  STUDY_BG_COLOR,
  FREE_BG_COLOR,
  ALL_LABELS,
  CLASS_LABELS,
  STUDY_LABELS,
  FREE_LABELS,
} from "../../utils/chartDataArrays";

function Donut() {
  const [isAllSelected] = useContext(SelectedContext);

  return (
    <Container class="donut_root">
      <h4 class="head_title">All Screen Time</h4>

      {isAllSelected === 0 && (
        <Chart
          DATA_ARRAY={ALL_CHART}
          BG_ARRAY={ALL_BG_COLOR}
          LABEL_ARRAY={ALL_LABELS}
        />
      )}

      {isAllSelected === 1 && (
        <Chart
          DATA_ARRAY={CLASS_CHART}
          BG_ARRAY={CLASS_BG_COLOR}
          LABEL_ARRAY={CLASS_LABELS}
        />
      )}

      {isAllSelected === 2 && (
        <Chart
          DATA_ARRAY={STUDY_CHART}
          BG_ARRAY={STUDY_BG_COLOR}
          LABEL_ARRAY={STUDY_LABELS}
        />
      )}

      {isAllSelected === 3 && (
        <Chart
          DATA_ARRAY={FREE_CHART}
          BG_ARRAY={FREE_BG_COLOR}
          LABEL_ARRAY={FREE_LABELS}
        />
      )}
    </Container>
  );
}

export default Donut;
