function calculateHypotenuse(a, b) {
   if (!Number.isFinite(a) || !Number.isFinite(b) || a <= 0 || b <= 0) {
    throw new Error("Invalid input");
  }

  const hypotenuse = Math.sqrt(a * a + b * b);

  return Number(hypotenuse.toFixed(3));
}