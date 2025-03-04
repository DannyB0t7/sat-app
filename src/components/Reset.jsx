import React, { memo, useContext } from "react";
import { Button } from "@radix-ui/themes";
import { TaskCtx } from "../store/TableContext";
import styled from "styled-components";

const ButtonContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: row-reverse;
  gap: 0.5rem;
`;

const Reset = memo(function () {
  const { onClearLocalStorage } = useContext(TaskCtx);
  return (
    <ButtonContainer>
      <Button color="crimson" variant="soft" onClick={onClearLocalStorage} >
        Reset
      </Button>
    </ButtonContainer>
  );
});

export default Reset;
