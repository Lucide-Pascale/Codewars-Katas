function solution(string) {
  return string.split("").map(char=> char!==char.toUpperCase()? char: " "+char).join("");
}

console.log(solution("camelCasing"))