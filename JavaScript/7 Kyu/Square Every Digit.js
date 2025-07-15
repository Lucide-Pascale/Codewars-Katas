function squareDigits(num){
  a=num
    .toString()
    .split("")
    .map(num=>{
      return Number(num)* Number(num);
     })
    .join("")
  
  return Number(a);
}