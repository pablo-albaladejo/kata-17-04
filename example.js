const BowlingGame = require('./BowlingGame.js');

const rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]
const score = BowlingGame.getScore(rolls);
console.log("rolls: " + rolls.join(' '))
console.log("score: " + score)
