import React from "react";
import { getAllTasks } from "../../Firebase";
import { UserContext } from "../../App";
import CreateTask from "./CreateTask";
import Task from "./Task";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

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
    else{setTasks([])}
  };
  React.useEffect(() => {
    getTasks();
  }, [currentUser]);

  return (
    <div className="tasks">
      <CreateTask getTasks={getTasks} />
      {tasks.length < 1 ? (
        <Loader type="Audio" margin={80} color="purple" height={80} width={80} />
        // <div>Loading...</div>
      ) : (
        tasks.map(task => <Task key={task.id} {...task} />)
      )}
    </div>
  );
};

export default Tasks;
