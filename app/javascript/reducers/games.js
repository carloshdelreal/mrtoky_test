
const gamesReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_GAMES':
      return action.payload;
    default:
      return state;
  }
};

export default gamesReducer;
