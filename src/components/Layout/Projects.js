import React from "react";
import { connect } from "react-redux";

const Projects = ({ todos }) => {
  const projects = todos
    .map(todo => todo.project)
    .reduce((acc, project) => {
      let value = Object.keys(acc).find(prj => prj === project);
      if (value) {
        acc[project] += 1;
        return acc;
      }
      acc[project] = 1;
      return acc;
    }, {});
  return (
    <div>
      {Object.entries(projects).map(project => (
        <div key={project[0]}>
          {project[0]} - {project[1]}
        </div>
      ))}
    </div>
  );
};

const mapState = ({ todos }) => ({ todos });
export default connect(mapState)(Projects);
