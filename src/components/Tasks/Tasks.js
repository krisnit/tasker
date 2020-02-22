import React from "react";
import { getAllTasks } from "../../Firebase";
import { UserContext } from "../../App";
import CreateTask from "./CreateTask";
import Task from "./Task";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { getTasks } from "../../store/todos/todosActions";

const Tasks = props => {
  const getTasks = async () => {
    if (props.user) {
      const taskList = await getAllTasks(props.user);
      props.getTasks(taskList);
    }
  };
  React.useEffect(() => {
    getTasks();
  }, [props.user]);

  return (
    <div className="tasks">
      <CreateTask getTasks={getTasks} />
      {props.todos.length < 1 ? (
        <Loader
          type="Audio"
          margin={80}
          color="purple"
          height={80}
          width={80}
        />
      ) : (
        // <div>Loading...</div>
        props.todos.map(todo => <Task key={todo.id} {...todo} user={props.user} />)
      )}
    </div>
  );
};

const mapState = ({ todos, user }) => ({ todos, user });
const mapDispatch = dispatch => ({
  getTasks: data => dispatch(getTasks(data))
});

export default connect(mapState, mapDispatch)(Tasks);
