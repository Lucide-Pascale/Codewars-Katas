function getCount(str) {
  return str.split("").filter(letter=>'/[aiuoe]/i'.includes(letter)).length;
}