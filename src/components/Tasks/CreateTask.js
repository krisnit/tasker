import React from "react";
import { createTask } from "../../Firebase";
import { UserContext } from "../../App";

const CreateTask = props => {
  const currentUser = React.useContext(UserContext);
  let [task, setTask] = React.useState({ createdAt: "", taskName: "" });
  const handleChange = e => {
    setTask({ createdAt: new Date(), taskName: e.target.value });
  };
  const handleSubmit = async (e, value) => {
    e.preventDefault();
    const taskRef = await createTask(value, task);
    console.log(taskRef);
    const listItems = await taskRef.get();

    const tasks = listItems.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });
    console.log(tasks);
    props.handleTasks(tasks);
  };
  return (
    <div className="createtask">
      <form onSubmit={event => handleSubmit(event, currentUser)}>
        <label>Task Name</label>
        <input onChange={handleChange} type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateTask;
