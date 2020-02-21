const inititalState = {};

const todosReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state;
    default:
      return state;
  }
};

export default todosReducer;
