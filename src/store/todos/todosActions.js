import { createTask, getTask } from "../../Firebase";

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
