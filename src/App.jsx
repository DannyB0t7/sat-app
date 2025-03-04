import React from "react";
import "./App.css";
import "@radix-ui/themes/styles.css";
import TableComp from "./components/Table";
import styled from "styled-components";
import TableContext from "./store/TableContext";
import Header from "./components/Header";
import Reset from "./components/Reset";
import Completed from "./components/Completed";

const Container = styled.div`
  margin: 2.5rem auto;
  padding: 0 1rem;
  max-width: 1536px;
`;

function App() {
  return (
    <TableContext>
      <Container>
        <Header />
        <Completed />
        <TableComp />
        <Reset />
      </Container>
    </TableContext>
  );
}

export default App;
