import React from "react";
import { createTask } from "../../Firebase";
import { UserContext } from "../../App";
import DateTimePicker from "react-datetime-picker";
import { withRouter } from "react-router-dom";

let initialState = {
  createdAt: new Date(),
  taskName: "",
  project: "",
  date: new Date(),
  completed: false
};

const CreateTask = props => {
  const currentUser = React.useContext(UserContext);
  let [task, setTask] = React.useState(initialState);
  const handleChange = (e, date) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleDateChange = date => {
    setTask({ ...task, date });
  };
  const handleSubmit = async (e, value) => {
    e.preventDefault();
    if (currentUser) {
      await createTask(value, task);
      props.getTasks();
      setTask(initialState);
    } else {
      props.history.push("/signin");
    }
  };
  return (
    <>
      <div className="createtask">
        <form onSubmit={event => handleSubmit(event, currentUser)}>
          <label forname="taskName">Task Name</label>
          <input
            name="taskName"
            onChange={handleChange}
            type="text"
            value={task.taskName}
          />
          <label forname="project">Project</label>
          <input
            name="project"
            onChange={handleChange}
            type="text"
            value={task.project}
          />
          <label forname="dueDate">Complete By</label>
          <DateTimePicker onChange={handleDateChange} value={task.date} />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default withRouter(CreateTask);
