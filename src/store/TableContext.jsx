import { createContext, useState } from "react";
import { Tasks } from "../../Task";

export const TaskCtx = createContext({
  checklistTask: [],
  onTaskStatus: () => {},
  onCompletedMaster: () => {},
  onCompleted: () => {},
  onClearLocalStorage: () => {},
  onCompletedSwitch: () => {},
});

function TableContext({ children }) {
  const storedTasks = JSON.parse(
    localStorage.getItem("storedchecklistTask")
  ) || {
    completedSwitch: false,
    masterChecklist: false,
    tasks: Tasks,
  };

  const [checklistTask, setChecklistTask] = useState(storedTasks);

  //updating masterchecklist status and updating local storage
  const masterChecklistHandler = () => {
    setChecklistTask((prevState) => {
      let bool = prevState.masterChecklist ? false : true;

      let updatedTasks = [];

      if (bool) {
        updatedTasks = prevState.tasks.map((taskobj) => {
          return {
            ...taskobj,
            completed: true,
            status: "completed",
          };
        });
      } else {
        updatedTasks = prevState.tasks.map((taskobj) => {
          return {
            ...taskobj,
            completed: false,
            status: "not-started",
          };
        });
      }

      let updatedChecklistTask = {
        ...prevState,
        masterChecklist: bool,
        tasks: updatedTasks,
      };

      localStorage.setItem(
        "storedchecklistTask",
        JSON.stringify(updatedChecklistTask)
      );

      return updatedChecklistTask;
    });
  };

  //updating the status of each task, status complete - completed true || setting local storage
  const taskStatusHandler = (id, val) => {
    setChecklistTask((prevState) => {
      const [exsistingTask] = prevState.tasks.filter(
        (taskObj) => taskObj.id === id
      );

      const exsistingTaskIndex = prevState.tasks.findIndex(
        (taskobj) => taskobj.id === id
      );

      const updatedTasks = [...prevState.tasks];

      if (
        prevState.completedSwitch === true &&
        (val === "in-progress" || val === "not-started")
      ) {
        updatedTasks[exsistingTaskIndex] = {
          ...exsistingTask,
          completed: false,
          status: val,
        };

        const updatedChecklistTask = {
          ...prevState,
          tasks: updatedTasks,
        };

        localStorage.setItem(
          "storedchecklistTask",
          JSON.stringify(updatedChecklistTask)
        );

        return updatedChecklistTask;
      }

      if (val === "completed") {
        updatedTasks[exsistingTaskIndex] = {
          ...exsistingTask,
          completed: true,
          status: val,
        };
      } else {
        updatedTasks[exsistingTaskIndex] = {
          ...exsistingTask,
          status: val,
        };
      }

      const updatedChecklistTask = {
        ...prevState,
        tasks: updatedTasks,
      };

      localStorage.setItem(
        "storedchecklistTask",
        JSON.stringify(updatedChecklistTask)
      );

      return updatedChecklistTask;
    });

    // console.log(id, val);
  };

  //changing completed status for tasks and setting local storage for tasks
  const completedTaskHandler = (id) => {
    setChecklistTask((prevState) => {
      const [exsistingTask] = prevState.tasks.filter(
        (taskObj) => taskObj.id === id
      );

      const exsistingTaskIndex = prevState.tasks.findIndex(
        (taskobj) => taskobj.id === id
      );

      const updatedTasks = [...prevState.tasks];

      let bool;
      if (exsistingTask.completed) {
        bool = false;
      } else {
        bool = true;
      }

      if (bool) {
        updatedTasks[exsistingTaskIndex] = {
          ...exsistingTask,
          status: "completed",
          completed: bool,
        };
      } else {
        updatedTasks[exsistingTaskIndex] = {
          ...exsistingTask,
          status: 'in-progress',
          completed: bool,
        };
      }

      let updatedChecklistTask = {
        ...prevState,
        tasks: updatedTasks,
      };

      localStorage.setItem(
        "storedchecklistTask",
        JSON.stringify(updatedChecklistTask)
      );

      return updatedChecklistTask;
    });
  };

  //clearing local storage and updating state
  const clearLocalStorage = () => {
    localStorage.clear("storedchecklistTask");
    setChecklistTask({
      completedSwitch: false,
      masterChecklist: false,
      tasks: Tasks,
    });
  };

  //updating switch status and updating localstorage
  const completedSwitchHandler = () => {
    setChecklistTask((prevState) => {
      const updatedCompletedSwitch = prevState.completedSwitch ? false : true;

      const updatedState = {
        ...prevState,
        completedSwitch: updatedCompletedSwitch,
      };

      localStorage.setItem("storedchecklistTask", JSON.stringify(updatedState));

      return updatedState;
    });
  };

  const checklistCtx = {
    checklistTask: checklistTask,
    onTaskStatus: taskStatusHandler,
    onCompletedMaster: masterChecklistHandler,
    onCompleted: completedTaskHandler,
    onClearLocalStorage: clearLocalStorage,
    onCompletedSwitch: completedSwitchHandler,
  };

  return <TaskCtx.Provider value={checklistCtx}>{children}</TaskCtx.Provider>;
}

export default TableContext;
