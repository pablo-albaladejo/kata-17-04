const expect = require('expect.js');
const BowlingGate = require('./BowlingGate.js');

const rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]

const initState = {
  score: 0,
}

describe('Basic  rules', () => {

  describe('Basic Frame', () => {
    let firstRoll; let sencodRoll;

    it('First roll', () => {
      firstRoll = BowlingGate.roll(rolls[0], initState);
      expect(firstRoll.score).to.equal(initState.score + rolls[0]);
    });

    it('Second roll', () => {
      sencodRoll = BowlingGate.roll(rolls[1], firstRoll);
      expect(sencodRoll.score).to.equal(initState.score + rolls[0] + rolls[1]);
    });
  })

})
