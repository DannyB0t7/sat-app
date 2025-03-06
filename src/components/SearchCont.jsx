import React from "react";
import Search from "./Search";
import Completed from "./Completed";
import styled from "styled-components";

const StyledCont = styled.div`
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

function SearchCont() {
  return (
    <StyledCont>
      <Search />
      <Completed />
    </StyledCont>
  );
}

export default SearchCont;
