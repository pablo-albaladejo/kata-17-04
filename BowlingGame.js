const {
  STATUS
} = require('./commons.js');

const roll = (pins, state) => {
  const isStrike = state.frame.length === 0 && pins === 10;
  state.frame.push(pins);
  return {
    ...state,
    status: isStrike ? STATUS.STRIKE : STATUS.NORMAL,
    score: isStrike ? state.score : state.score + pins,
    acc: isStrike ? 10 : 0,
  };
}
const getScore = (rolls) => {
  let state = {
    frame: [],
    status: STATUS.NORMAL,
    score: 0,
    acc: 0,
  };;

  for (i = 0; i < rolls.length; i++) {
    state = roll(rolls[i], state)
  }

  return state.score;
}

module.exports = {
  roll,
  getScore,
}
