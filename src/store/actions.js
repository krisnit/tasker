import fetch from "cross-fetch";
// import { getAllTasks } from "../../irebase";

export const addToState = () => {
  return {
    type: "ADD_TO_STATE",
    payload: { todo: "data" }
  };
};
export const fetchPosts = a => {
  return dispatch => {
    console.log(a, "thunk");
    return dispatch(addToState());
  };
};
