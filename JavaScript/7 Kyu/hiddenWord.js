function hiddenWord(num) {
  const key = {
    "1": "b",
    "2": "l",
    "3": "i",
    "4": "e",
    "5": "t",
    "6": "a",
    "7": "d",
    "8": "n",
    "9": "m",
    "0": "o"
  };
  
  return num.toString().split("").map(digit=>key[digit]).join("")
  
}

console.log(hiddenWord(900))