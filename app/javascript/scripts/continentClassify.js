const classifier = (data) => {
  const dict = {};
  data.forEach(element => {
    if (dict[element.region] === undefined) {
      dict[element.region] = [element];
    } else {
      dict[element.region].push(element);
    }
  });
  return dict;
};

export default classifier;
