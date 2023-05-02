const Counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DEVREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default Counter;
