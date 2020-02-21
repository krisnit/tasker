const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log("in fetch data", action.payload);
      return { ...action.payload };
    case "ADD_TO_STATE":
      console.log("hello i m here");
      return { ...state, todo: action.payload };
    default:
      return state;
  }
};

export default userReducer;
