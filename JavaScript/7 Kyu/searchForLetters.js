function change(str){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  str = str.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    if (str.includes(alphabet[i])) {
      result += "1";
    } else {
      result += "0";
    }
  }

  return result;
}