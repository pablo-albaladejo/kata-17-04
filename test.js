const expect = require('expect.js');
const BowlingGame = require('./BowlingGame.js');
const { STATUS } = require('./commons.js');

describe('Basic  rules', () => {

  describe('Basic Frame', () => {

    const prevState = {
      frame: [],
      status: STATUS.NORMAL,
      score: 0,
      acc: 0,
    };

    const firstRoll = 1; const secondRoll = 4;
    let firstRollState; let sencodRollState;

    it('First roll', () => {
      firstRollState = BowlingGame.roll(firstRoll, prevState);
      expect(firstRollState.score).to.equal(prevState.score + firstRoll);
    });

    it('Second roll', () => {
      sencodRollState = BowlingGame.roll(secondRoll, firstRollState);
      expect(sencodRollState.score).to.equal(prevState.score + firstRoll + secondRoll);
    });
  })

  describe('Stike Frame', () => {
    const prevState = {
      frame: [],
      status: STATUS.NORMAL,
      score: 0,
      acc: 0,
    };;

    const pins = 10;
    it('accumulates 10 points if no previous strike', () => {
      nextState = BowlingGame.roll(pins, prevState);
      expect(nextState.status).to.equal(STATUS.STRIKE);
      expect(nextState.acc).to.equal(10);
      expect(nextState.score).to.equal(prevState.score);
    });

  })


})

describe('Full play', () => {

  it('Example play', () => {
    const rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]
    score = BowlingGame.getScore(rolls);
    expect(score).to.equal(133);
  });

})
