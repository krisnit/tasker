import React from "react";
import { getAllTasks } from "../../Firebase";
import { UserContext } from "../../App";

const Tasks = () => {
  const currentUser = React.useContext(UserContext);
  console.log(currentUser);
  const [tasks, setTasks] = React.useState([]);
  React.useEffect(() => {
    const getTasks = async () => {
      const taskList = await getAllTasks(currentUser);
      setTasks(taskList);
    };
    getTasks();
  }, []);
  console.log(tasks);
  return (
    <div className="tasks">
      {tasks.map(({ id, taskName, createdAt }) => (
        <div key={id}>
          <div>{taskName}</div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
