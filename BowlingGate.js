const { STATUS, initState } = require('./commons.js');

const roll = (pins, state) => {
  return {
    status: state.STATUS,
    score: state.score + pins,
  };
}
const getScore = (rolls) => {
  let state = initState;

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

run();

module.exports = {
  roll,
  getScore,
  run,
}
