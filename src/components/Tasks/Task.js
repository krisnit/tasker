import React from "react";
import "./Task.scss";
import { connect } from "react-redux";
import { removeTask, toggleTodo } from "../../store/todos/todosActions";

const Task = ({
  id,
  taskName,
  project,
  createdAt,
  date,
  user,
  removeTask,
  completed,
  toggleTodo
}) => {
  console.log(completed);
  return (
    <div className="task" key={id}>
      <div className="task-item">
        {/* <input
          className="checkbox"
          type="checkbox"
          
        /> */}
        <span
          onClick={() => toggleTodo(user, id, completed)}
          className="name"
          style={
            completed
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }>
          {taskName}
        </span>

        <span className="project">{project}</span>
      </div>
      <div className="task-schedule">
        <span className="created">
          Created Date: {createdAt.toDate().toLocaleString()}
        </span>
        <span className="duedate">
          Due Date : {date.toDate().toLocaleString()}
        </span>
        <button className="edit">Edit</button>
        <button className="delete" onClick={() => removeTask(user, id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

const mapState = ({ user }) => ({
  user
});
const mapDispatch = dispatch => ({
  removeTask: (user, id) => dispatch(removeTask(user, id)),
  toggleTodo: (user, id, value) => dispatch(toggleTodo(user, id, value))
});

export default connect(mapState, mapDispatch)(Task);
