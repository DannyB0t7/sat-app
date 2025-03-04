import React, { memo, useContext } from "react";
import { Switch } from "@radix-ui/themes";
import styled from "styled-components";
import { TaskCtx } from "../store/TableContext";

const StyledSwitchCont = styled.div`
  margin: 1.5rem 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: flex-end;
`;

function Completed() {
  const { checklistTask, onCompletedSwitch } = useContext(TaskCtx);

  return (
    <StyledSwitchCont>
      <Switch
        color="iris"
        size={1}
        checked={checklistTask.completedSwitch}
        onClick={onCompletedSwitch}
      />
      <p
        style={{
          fontSize: "12px",
          color: `${checklistTask.completedSwitch ? "black" : "grey"}`,
        }}
      >
        Completed
      </p>
    </StyledSwitchCont>
  );
}

export default Completed;
