const evenOrOdd = new Proxy(
  function (n) {
    return n % 2 === 0 ? "Even" : "Odd";
  },
  {
    get(target, prop) {
      const num = Number(prop);
​
      if (isNaN(num)) return target[prop];
​
      return num % 2 === 0 ? "Even" : "Odd";
    }
  }
);