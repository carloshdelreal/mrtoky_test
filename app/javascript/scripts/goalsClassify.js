const selectGoalsByMinute = (goalsList, minute, expression) => {
  if (!['>', '<', '='].includes(expression)) {
    return null;
  }
};

export default selectGoalsByMinute;
