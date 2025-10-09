function whatCentury(year)
{
  const century= `${Math.ceil(year/100)}`
  const suffix=century.slice(-1)
  if(century<11||century>13 ){
  switch(suffix){
  
      case "1":
        return century+"st"
      case "2":
        return century+"nd"
      case "3":
        return century+"rd"
      
      default:
        return century+"th"
      
  }
  }
  else{
    return century+"th"
  }
}

