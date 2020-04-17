const expect = require('expect.js');
const BowlingGate = require('./BowlingGate.js');
const { STATUS, initState } = require('./commons.js');

describe('Basic  rules', () => {

  describe('Basic Frame', () => {

    const prevState = initState;

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
    const prevState = initState;

    const firstRoll = 10;
    let firstRollState;

    it('10 pins with normal previous status', () => {
      firstRollState = BowlingGate.roll(firstRoll, prevState);
      expect(firstRollState.status).to.equal(STATUS.STRIKE);
    });

  })

})
