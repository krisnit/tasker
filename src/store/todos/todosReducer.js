import { FaSatellite } from "react-icons/fa";

const initialState = {
  createdAt: new Date(),
  taskName: "",
  project: "",
  date: new Date(),
  completed: false
};

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todoReducer(undefined, action)];
    case "GET_TODOS":
      return [...action.payload];
    case "REMOVE_TODO":
      return todoReducer(state, action);
    case "TOGGLE_TODO":
      return todoReducer(state, action);
    default:
      return state;
  }
};

export default todosReducer;

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...action.task };
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map(todo => {
        if (todo.id === action.id)
          return { ...todo, completed: !todo.completed };
        return { ...todo };
      });
    default:
      return state;
  }
};
