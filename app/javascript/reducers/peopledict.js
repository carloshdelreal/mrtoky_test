const pDictReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_PDICT':
      return action.payload;
    default:
      return state;
  }
};

export default pDictReducer;