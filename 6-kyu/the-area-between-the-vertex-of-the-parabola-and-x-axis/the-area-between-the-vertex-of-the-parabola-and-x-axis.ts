export function areaBetweenRoots(a: number, b: number, c: number): number {
​
  const discriminant = b * b - 4 * a * c;
  if (discriminant <= 0) {
    return 0;
  }
​
  const area = (discriminant * Math.sqrt(discriminant)) / (6 * Math.pow(a, 2));
​
  return area;
}