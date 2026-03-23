function correct(exp) {
  const ops = ["+", "-", "*", "/"];
  const slots = (exp.match(/\(\)/g) || []).length;
​
  function backtrack(path) {
    if (path.length === slots) {
      let filled = exp;
​
      // Replace () with (op) for output
      for (let op of path) {
        filled = filled.replace("()", `(${op})`);
      }
​
      // Create evaluatable version (remove parentheses around operator)
      const evaluable = filled.replace(/\(([+\-*/])\)/g, "$1");
​
      const [left, right] = evaluable.split("=");
​
      try {
        const l = eval(left);
        const r = eval(right);
​
        if (Math.abs(l - r) < 1e-9) {
          return filled; // return original format with (op)
        }
      } catch {
        return null;
      }
​
      return null;
    }
​
    for (let op of ops) {
      const res = backtrack([...path, op]);
      if (res) return res;
    }
​
    return null;
  }
​
  return backtrack([]);
}
​