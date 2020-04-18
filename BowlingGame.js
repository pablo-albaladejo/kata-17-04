const {
  STATUS,
  printState
} = require('./commons.js');

const roll = (pins, prevState) => {
  const nextState = { ...prevState }

  nextState.rolls.push(pins)
  if (nextState.frame.length % 2 === 0) nextState.frame = [];

  const isStrike = nextState.frame.length === 0 && pins === 10;
  if (!isStrike) nextState.frame.push(pins);

  nextState.status = isStrike ? STATUS.STRIKE : STATUS.NORMAL;
  nextState.score = isStrike ? nextState.score : nextState.score + pins;
  nextState.acc = isStrike ? 10 : 0;

  //printState(nextState);

  return nextState;
}
const getScore = (rolls) => {
  let state = {
    rolls: [],
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
