const createPeopleDict = (peopleList) => {
  const dict = {};
  peopleList.forEach(element => {
    dict[element.id] = element;
  });
  return dict;
};

export default createPeopleDict;
