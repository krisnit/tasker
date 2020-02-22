import { createTask, getTask, deleteTask, toggleTask } from "../../Firebase";

export const getTasks = data => ({
  type: "GET_TODOS",
  payload: data
});

export const addTask = (user, task) => async dispatch => {
  let result = await createTask(user, task);
  let [id] = result;
  const todo = await getTask(user, id);
  dispatch({ type: "ADD_TODO", task: todo });
};

export const removeTask = (user, id) => async dispatch => {
  try {
    await deleteTask(user, id);
    dispatch({ type: "REMOVE_TODO", id });
  } catch (err) {
    console.log(err);
  }
};

export const toggleTodo = (user, id, value) => async dispatch => {
  try {
    await toggleTask(user, id, value);
    dispatch({ type: "TOGGLE_TODO", id });
  } catch (err) {
    console.log(err);
  }
};
