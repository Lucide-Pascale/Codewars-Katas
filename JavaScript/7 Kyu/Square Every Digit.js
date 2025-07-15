function squareDigits(num){
  a=num
    .toString()
    .split("")
    .map(num=>{
      return num*num;//Type Coercion, String to Integer bcs *
     })
    .join("")
  
  return Number(a);
}