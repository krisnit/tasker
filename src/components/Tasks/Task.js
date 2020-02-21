import React from "react";
import "./Task.scss";

const Task = ({ id, taskName, project, createdAt, date }) => {
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
        <button className="delete" onClick={() => console.log("delete")}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
