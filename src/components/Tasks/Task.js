import React from "react";
import "./Task.scss";
import { deleteTask } from "../../Firebase";

const Task = ({ id, taskName, project, createdAt, date, user }) => {
  return (
    <div className="task" key={id}>
      <div className="task-item">
        <input
          className="checkbox"
          type="checkbox"
          onChange={() => console.log("hi")}
        />
        <span className="name">{taskName}</span>

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
        <button className="delete" onClick={() => deleteTask(user, id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

const getState =({user})=>({
  user
})

export default Task;
