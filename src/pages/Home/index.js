import React from "react";
import TopBar from "../../containers/TopBar/index";
import Box from "../../containers/Box/index";
import { Container } from "@material-ui/core";
import "./style.scss";

function Home() {
  return (
    <Container>
      <TopBar />
      <div className="middle_section">
        <Box />
      </div>
    </Container>
  );
}

export default Home;
