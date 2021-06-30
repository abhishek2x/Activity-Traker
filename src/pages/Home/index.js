import React from "react";
import TopBar from "../../containers/TopBar/index";
import Box from "../../containers/Box/index";
import { Container } from "@material-ui/core";
import "./style.scss";
import { ContentContextProvider } from "../../context/ContentContext";
import { SelectedContextProvider } from "../../context/SelectedContext";

function Home() {
  return (
    <ContentContextProvider>
      <SelectedContextProvider>
        <Container>
          <TopBar />
          <div className="middle_section">
            <Box />
          </div>
        </Container>
      </SelectedContextProvider>
    </ContentContextProvider>
  );
}

export default Home;
