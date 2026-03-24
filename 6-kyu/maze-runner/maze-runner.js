  for (let dir of directions) {
    x += moves[dir][0];
    y += moves[dir][1];
​
​
    if (x < 0 || y < 0 || x >= n || y >= n) {
      return "Dead";
    }
​
​
    if (maze[x][y] === 1) {
      return "Dead";
    }
​
​
    if (maze[x][y] === 3) {
      return "Finish";
    }
  }
​
​
  return "Lost";
}
​