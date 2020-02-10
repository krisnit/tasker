import React from "react";
import CreateTask from "./CreateTask";

const Tasks = () => {
  const [tasks, setTasks] = React.useState([]);
  const handleTasks = task => {
    setTasks(task);
  };
  console.log(tasks);
  return (
    <div className="tasks">
      <CreateTask handleTasks={handleTasks} />
      {tasks.map(({ id, taskName, createdAt }) => (
        <div key={id}>
          <div>{taskName}</div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
