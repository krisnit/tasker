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
    default:
      return state;
  }
};

export default todosReducer;

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...action.task };
    default:
      return state;
  }
};
