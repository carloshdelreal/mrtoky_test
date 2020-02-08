
const countriesReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_COUNTRIES':
      return action.payload;
    default:
      return state;
  }
};

export default countriesReducer;
