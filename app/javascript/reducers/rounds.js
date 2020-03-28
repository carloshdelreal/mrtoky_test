const roundsReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_ROUNDS':
      return action.payload;
    default:
      return state;
  }
};

export default roundsReducer;
