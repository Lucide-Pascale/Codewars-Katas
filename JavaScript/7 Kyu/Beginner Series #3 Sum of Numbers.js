function getSum(a, b)
{
  count=0;
   if(a>b){
     for(b;b<=a;b++){
       count+=b;
     }
    return count;
   }
  else{
    for(a;a<=b;a++){
       count+=a;
     }
    return count;
  }
}


console.log(getSum(1,0));