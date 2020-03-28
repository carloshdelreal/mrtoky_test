const selectGoalsByMinute = (goalsList, minute, expression) => {
  if (!['>', '<', '='].includes(expression)) {
    return null;
  }
  const result = [];

  if (expression === '=') {
    goalsList.forEach(element => {
      if (element.minute === minute) {
        result.push(element);
      }
    });
    return result;
  }

  if (expression === '<') {
    goalsList.forEach((element) => {
      if (element.minute < minute) {
        result.push(element);
      }
    });
    return result;
  }

  if (expression === '>') {
    goalsList.forEach((element) => {
      if (element.minute > minute) {
        result.push(element);
      }
    });
    return result;
  }

};

export default selectGoalsByMinute;
