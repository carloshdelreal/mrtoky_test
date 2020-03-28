
const queryGoalsReducer = (state = null, action) => {
  switch (action.type) {
    case 'QUERY_GOALS':
      return action.payload;
    default:
      return state;
  }
};

export default queryGoalsReducer;
