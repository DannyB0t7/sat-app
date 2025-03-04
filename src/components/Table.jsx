import React, { useContext } from "react";
import { Table, Checkbox } from "@radix-ui/themes";
import { TaskCtx } from "../store/TableContext";

function TableComp() {
  const { checklistTask, onCompletedMaster, onCompleted } = useContext(TaskCtx);

  const filteredTasks = checklistTask.tasks.filter((taskObj) => {
    if (taskObj.completed === checklistTask.completedSwitch) return taskObj;
  });

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>
            <Checkbox
              onClick={onCompletedMaster}
              color="iris"
              checked={checklistTask.masterChecklist}
            />
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Phase</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Responsible Team</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Task</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {filteredTasks.length === 0 && (
          <Table.Row>
            <Table.RowHeaderCell></Table.RowHeaderCell>
            <Table.Cell>No tasks to display...</Table.Cell>
            <Table.RowHeaderCell></Table.RowHeaderCell>
            <Table.RowHeaderCell></Table.RowHeaderCell>
          </Table.Row>
        )}

        {filteredTasks.length > 0 &&
          filteredTasks.map((taskObj) => (
            <Table.Row key={taskObj.id}>
              <Table.RowHeaderCell>
                <Checkbox
                  color="iris"
                  checked={taskObj.completed}
                  onClick={() => onCompleted(taskObj.id)}
                />
              </Table.RowHeaderCell>
              <Table.Cell>{taskObj.phase}</Table.Cell>
              <Table.Cell>{taskObj.team}</Table.Cell>
              <Table.Cell>{taskObj.task}</Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table.Root>
  );
}

export default TableComp;
