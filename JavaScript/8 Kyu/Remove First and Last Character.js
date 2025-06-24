function removeChar(str){
  if(str.length>=2){
    return str.split("").slice(1,-1).join("");
    }
  else{
    return "String should be at least 2 characters long"
  }
};


console.log(removeChar('eloquent') )
