import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Container fixed>
          <Table />
        </Container>
      </Wrapper>
    </div>
  );
}

export default App;
