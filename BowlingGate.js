const roll = (pins, state) => {
  return {
    ...state,
    score: state.score + pins,
  };
}
const getScore = () => {
  return 0;
}

module.exports = {
  roll,
  getScore
}
