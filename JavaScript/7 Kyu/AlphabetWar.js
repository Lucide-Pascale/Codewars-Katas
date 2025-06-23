function alphabetWar(fight)
{
  left=0;
  right=0;
  arr=fight.split("")
  for(i=0;i<arr.length;i++){
    if(arr[i]==="w"){
      left+=4
    }
    else if (arr[i]==="p"){
      left+=3;
    }
    else if (arr[i]==="b"){
      left+=2;
    }
    else if (arr[i]==="s"){
      left+=1;
    }
    else if (arr[i]==="m"){
      right+=4;
    }
    else if (arr[i]==="q"){
      right+=3;
    }
    else if (arr[i]==="d"){
      right+=2;
    }
    else if (arr[i]==="z"){
      right+=1;
    }
    else{
      continue
    }
  }
  if(left>right){
    return "Left side wins!"
  }
  else if(right>left){
    return"Right side wins!"
  }
   return "Let's fight again!";
}

console.log(alphabetWar("wwwwwwz"))