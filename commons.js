const STATUS = {
  NORMAL: 'NORMAL',
  STRIKE: 'STRIKE'
}

const printState = (state) => {
  console.log("Rolls: " + state.rolls)
  console.log("Frame: " + state.frame)
  console.log("Score: " + state.score)
  console.log("Acc: " + state.acc)
  console.log("Status: " + state.status)
  console.log("---------")
}

module.exports = {
  STATUS,
  printState
}
