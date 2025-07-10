function reverseWords(str) {
  return str
    .split(" ")
    .map(word=>{ return word.split("").reverse().join("")})
    .join(" ");
}

reverseWords("This is an example!") // returns sihT si na !elpmaxe