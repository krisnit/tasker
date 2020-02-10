import React from "react";
import { getAllTasks } from "../../Firebase";
import { UserContext } from "../../App";
import CreateTask from "./CreateTask";
import Task from "./Task";

const Tasks = () => {
  const currentUser = React.useContext(UserContext);
  console.log(currentUser);
  const [tasks, setTasks] = React.useState([]);
  const getTasks = async () => {
    if (currentUser) {
      console.log(currentUser);
      const taskList = await getAllTasks(currentUser);
      setTasks(taskList);
    }
  };
  React.useEffect(() => {
    getTasks();
  }, [currentUser]);
  console.log(tasks);
  return (
    <div className="tasks">
      <CreateTask getTasks={getTasks} />
      {tasks.length < 1 ? (
        <div>Loading...</div>
      ) : (
        tasks.map(task => <Task key={task.id} {...task} />)
      )}
    </div>
  );
};

export default Tasks;
