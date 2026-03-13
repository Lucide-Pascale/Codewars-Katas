function nthChar(words){
 let n=0;
 return words.map(word=>{
   
   if(n>word.length-1){
     return word[-1]
   }
   vowel= word[n];
   n=n+1;
   return vowel
 }).join("")
}
​
console.log(nthChar(["yoda", "best", "has"]))