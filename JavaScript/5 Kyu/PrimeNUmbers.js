function isPrime(number) {
  let bool=true;
  for (let i=2; i<=Math.sqrt(number);i++){
    if (number%i===0){
      bool=false;
    }
  }
  if(number<=1){
    bool=false;
  }
  
  
  return bool;
}

function getPrimes(start, finish) {
  // ...
  let s= start;
  let f= finish;
  let arr=[];
  if(start>finish){
    s=finish;
    f=start;
  }
  for(let j=s;j<=f;j++){
    if(isPrime(j)){
      arr.push(j);
    }
  }
  return arr;
}




