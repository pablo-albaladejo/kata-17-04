const expect = require('expect.js');
const BowlingGate = require('./BowlingGate.js');
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
      firstRollState = BowlingGate.roll(firstRoll, prevState);
      expect(firstRollState.score).to.equal(prevState.score + firstRoll);
    });

    it('Second roll', () => {
      sencodRollState = BowlingGate.roll(secondRoll, firstRollState);
      expect(sencodRollState.score).to.equal(prevState.score + firstRoll + secondRoll);
    });
  })

  describe('Stike Fame', () => {
    const prevState = {
      frame: [],
      status: STATUS.NORMAL,
      score: 0,
      acc: 0,
    };;

    const firstRoll = 10;
    let firstRollState;

    it('accumulates 10 points', () => {
      firstRollState = BowlingGate.roll(firstRoll, prevState);
      expect(firstRollState.status).to.equal(STATUS.STRIKE);
      expect(firstRollState.acc).to.equal(10);
    });

  })

})

describe('Full play', () => {

  it('Example play', () => {
    const prevState = {
      frame: [],
      status: STATUS.NORMAL,
      score: 0,
      acc: 0,
    };
    const rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]
    score = BowlingGate.getScore(rolls, prevState);
    expect(score).to.equal(133);
  });

})
