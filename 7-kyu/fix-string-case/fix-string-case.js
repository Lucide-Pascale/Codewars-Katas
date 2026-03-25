function solve(s) {
  let lowerCount = 0;
  let upperCount = 0;
​
  for (let char of s) {
    if (char >= 'a' && char <= 'z') lowerCount++;
    else if (char >= 'A' && char <= 'Z') upperCount++;
  }
​
  if (lowerCount >= upperCount) {
    return s.toLowerCase();
  } else {
    return s.toUpperCase();
  }
}
​