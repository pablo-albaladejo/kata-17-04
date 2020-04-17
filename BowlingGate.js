const {
  STATUS
} = require('./commons.js');

const roll = (pins, state) => {
  const isStrike = state.frame.length === 0 && pins === 10;
  state.frame.push(pins);
  return {
    ...state,
    status: isStrike ? STATUS.STRIKE : STATUS.NORMAL,
    score: state.score + pins,
  };
}
const getScore = (rolls) => {
  let state = {
    frame: [],
    status: STATUS.NORMAL,
    score: 0,
  };;

  for (i = 0; i < rolls.length; i++) {
    state = roll(rolls[i], state)
  }

  return state.score;
}

const run = () => {
  const rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]
  const score = getScore(rolls);
  console.log("rolls: " + rolls.join(' '))
  console.log("score: " + score)
}

module.exports = {
  roll,
  getScore,
  run,
}
