
const goalsReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_GOALS':
      return action.payload;
    default:
      return state;
  }
};

export default goalsReducer;
