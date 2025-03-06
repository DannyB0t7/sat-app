import React, { createContext, useState } from "react";

export const FilterCtx = createContext({
  enteredData: "",
  onEnteredData: () => {},
});

function SearchContext({ children }) {
  const [enteredData, setEnteredData] = useState("");

  const filterByTeamHandler = (e) => {
    setEnteredData(e.target.value);
  };

  const filterCtx = {
    enteredData,
    onEnteredData: filterByTeamHandler,
  };

  return <FilterCtx.Provider value={filterCtx}>{children}</FilterCtx.Provider>;
}

export default SearchContext;
