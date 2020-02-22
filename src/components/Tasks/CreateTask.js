import React from "react";

import DateTimePicker from "react-datetime-picker";
import { withRouter } from "react-router-dom";
import "./CreateTask.scss";
import { connect } from "react-redux";
import { addTask } from "../../store/todos/todosActions";
let initialState = {
  createdAt: new Date(),
  taskName: "",
  project: "",
  date: new Date(),
  completed: false
};

const CreateTask = props => {
  let [task, setTask] = React.useState(initialState);
  const handleChange = (e, date) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleDateChange = date => {
    setTask({ ...task, date });
  };
  const handleSubmit = async (e, user) => {
    e.preventDefault();
    if (props.user) {
      props.createTask(props.user, task);
      setTask(initialState);
    } else {
      props.history.push("/signin");
    }
  };
  return (
    <>
      <div className="createtask">
        <form onSubmit={event => handleSubmit(event, props.user)}>
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
          <button className="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

const mapState = ({ todos, user }) => ({ todos, user });
const mapDispatch = dispatch => ({
  createTask: (user, task) => dispatch(addTask(user, task))
});

export default withRouter(connect(mapState, mapDispatch)(CreateTask));
