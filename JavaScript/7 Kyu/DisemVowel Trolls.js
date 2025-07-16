function disemvowel(str) {
  return str
          .split("")
          .filter(char=>!"aiuoeAIUOE".includes(char))
          .join("");
}

console.log(disemvowel("This website is for losers LOL!"))// returns Ths wbst s fr lsrs LL!