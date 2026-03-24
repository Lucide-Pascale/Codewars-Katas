class SnakesLadders {
  constructor() {
    this.positions = [0, 0]; // Player 1, Player 2
    this.currentPlayer = 0;  // 0 = Player 1, 1 = Player 2
    this.gameOver = false;
​
    this.board = {
      2: 38, 7: 14, 8: 31, 15: 26, 21: 42, 28: 84, 36: 44,
      51: 67, 71: 91, 78: 98, 87: 94,
      16: 6, 46: 25, 49: 11, 62: 19, 64: 60,
      74: 53, 89: 68, 92: 88, 95: 75, 99: 80
    };
  }
​
  play(die1, die2) {
    if (this.gameOver) {
      return "Game over!";
    }
​
    let move = die1 + die2;
    let player = this.currentPlayer;
​
    this.positions[player] += move;
​
​
    if (this.positions[player] > 100) {
      this.positions[player] = 100 - (this.positions[player] - 100);
    }
​
​
    if (this.board[this.positions[player]]) {
      this.positions[player] = this.board[this.positions[player]];
    }
​
​
    if (this.positions[player] === 100) {
      this.gameOver = true;
      return `Player ${player + 1} Wins!`;
    }
​
    if (die1 !== die2) {
      this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
    }
​
    return `Player ${player + 1} is on square ${this.positions[player]}`;
  }
}
​