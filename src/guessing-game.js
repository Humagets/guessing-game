class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
    this.guessNum = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.guessNum = Math.round((this.min + this.max) / 2);
    return this.guessNum;
  }

  lower() {
    this.max = this.guessNum - 1;
  }

  greater() {
    this.min = this.guessNum + 1;
  }
}

module.exports = GuessingGame;

