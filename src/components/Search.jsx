import React, { useContext } from "react";
import { TextField, Box } from "@radix-ui/themes";
import { FilterCtx } from "../store/SearchContext";

function Search() {
  const { enteredData, onEnteredData } = useContext(FilterCtx);
  return (
    <Box maxWidth="500px" width="100%">
      <TextField.Root
        size="2"
        placeholder="Search by responsible team…"
        color="iris"
        value={enteredData}
        onChange={onEnteredData}
      />
    </Box>
  );
}

export default Search;
