import React from "react";
import "./App.css";
import "@radix-ui/themes/styles.css";
import TableComp from "./components/Table";
import styled from "styled-components";
import TableContext from "./store/TableContext";
import Header from "./components/Header";
import Reset from "./components/Reset";
import SearchCont from "./components/SearchCont";
import SearchContext from "./store/SearchContext";

const Container = styled.div`
  margin: 2.5rem auto;
  padding: 0 1rem;
  max-width: 1536px;
`;

function App() {
  return (
    <TableContext>
      <SearchContext>
        <Container>
          <Header />
          <SearchCont />
          <TableComp />
          <Reset />
        </Container>
      </SearchContext>
    </TableContext>
  );
}

export default App;
