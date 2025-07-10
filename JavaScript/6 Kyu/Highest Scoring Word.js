function high(x){
 let score = {
  a: 1,  b: 2,  c: 3,  d: 4,  e: 5,
  f: 6,  g: 7,  h: 8,  i: 9,  j: 10,
  k: 11, l: 12, m: 13, n: 14, o: 15,
  p: 16, q: 17, r: 18, s: 19, t: 20,
  u: 21, v: 22, w: 23, x: 24, y: 25,
  z: 26
};

  y=x.toLowerCase().split(" ")
  let HighScore=0
  let HighScoreWord
  for (let word of y ){
    sum=0;
    for(let letter of word){
      sum+= score[letter]
    }
    if(sum>HighScore){
      HighScore=sum;
      HighScoreWord=word;
    }
  }
  
  return HighScoreWord;
}

console.log(high("I am tri buy")) //returns buy
