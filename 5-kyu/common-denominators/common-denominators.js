function convertFrac(arr) {
  if (arr.length === 0) return "";
​
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
​
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
​
  // Simplify fractions
  let simplified = arr.map(([num, den]) => {
    let g = gcd(num, den);
    return [num / g, den / g];
  });
​
  // Find common denominator
  let commonDen = simplified.reduce((acc, [, den]) => lcm(acc, den), 1);
​
  // Convert and format
  return simplified
    .map(([num, den]) => {
      let factor = commonDen / den;
      return `(${num * factor},${commonDen})`;
    })
    .join('');
}
​