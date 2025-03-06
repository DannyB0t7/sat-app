import React, { useContext } from "react";
import { Table, Checkbox, Select } from "@radix-ui/themes";
import { TaskCtx } from "../store/TableContext";
import { FilterCtx } from "../store/SearchContext";

function TableComp() {
  const { checklistTask, onCompletedMaster, onCompleted, onTaskStatus } =
    useContext(TaskCtx);

  const { enteredData } = useContext(FilterCtx);

  let filteredTasks = checklistTask.tasks.filter((taskObj) => {
    if (taskObj.completed === checklistTask.completedSwitch) return taskObj;
  });

  if (enteredData !== "") {
    filteredTasks = [...filteredTasks].filter((taskObj) => {
      if (taskObj.team.toLowerCase().includes(enteredData.toLowerCase()))
        return taskObj;
    });
  }

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
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
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
            <Table.RowHeaderCell></Table.RowHeaderCell>
          </Table.Row>
        )}

        {filteredTasks.length > 0 &&
          filteredTasks.map((taskObj) => (
            <Table.Row key={taskObj.id} align="center">
              <Table.RowHeaderCell>
                <Checkbox
                  color="iris"
                  checked={taskObj.completed}
                  onClick={() => onCompleted(taskObj.id)}
                />
              </Table.RowHeaderCell>
              <Table.Cell>{taskObj.phase}</Table.Cell>
              {/* select start*/}

              <Table.Cell>
                <Select.Root
                  value={taskObj.status}
                  onValueChange={(val) => onTaskStatus(taskObj.id, val)}
                >
                  <Select.Trigger>{}</Select.Trigger>
                  <Select.Content color="iris">
                    <Select.Group>
                      <Select.Item value="not-started">Not Started</Select.Item>
                      <Select.Item value="in-progress">In Progress</Select.Item>
                      <Select.Item value="completed">Completed</Select.Item>
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              </Table.Cell>
              {/* select end */}
              <Table.Cell>{taskObj.team}</Table.Cell>
              <Table.Cell>{taskObj.task}</Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table.Root>
  );
}

export default TableComp;
