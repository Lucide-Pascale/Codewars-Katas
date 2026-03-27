// weights array - is golden ore pieces weights
// n - is the weight of figurine
//
// return an array describing the left and right scale pans
function weightN(weights, n) {
  let result = null;
​
  function backtrack(index, left, right, diff) {
    // Stop if already found
    if (result) return;
​
    // If all weights considered
    if (index === weights.length) {
      if (diff === n) {
        result = [left.slice(), right.slice()];
      }
      return;
    }
​
    let w = weights[index];
​
    // 1. Put weight on LEFT
    left.push(w);
    backtrack(index + 1, left, right, diff + w);
    left.pop();
​
    // 2. Put weight on RIGHT
    right.push(w);
    backtrack(index + 1, left, right, diff - w);
    right.pop();
​
    // 3. Skip weight
    backtrack(index + 1, left, right, diff);
  }
​
  backtrack(0, [], [], 0);
​
  return result || [];
}
​