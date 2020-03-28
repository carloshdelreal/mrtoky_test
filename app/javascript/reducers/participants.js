
const participantsReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_PARTICIPANTS':
      return action.payload;
    default:
      return state;
  }
};

export default participantsReducer;
