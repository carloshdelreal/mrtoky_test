const getPeopleById = (peopleList, id) => {
  for (let i = 0; i < peopleList.length; i += 1) {
    if (peopleList[i].id === id) {
      return peopleList[i];
    }
  }
  return null;
};

export default getPeopleById;
