function divisors(integer) {
  let arr=[];
  for(i=2; i<integer; i++){
    if(integer%i===0){
      arr.push(i);
    }
  }
  
  return !arr.length?`${integer} is prime`:arr
}