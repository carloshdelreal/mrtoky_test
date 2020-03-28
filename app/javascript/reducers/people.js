
const peopleReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_PEOPLE':
      return action.payload;
    default:
      return state;
  }
};

export default peopleReducer;
