XO= str=> {
  return str.split("").filter(char=>char.toLowerCase()=="x").length===str.split("").filter(char=>char.toLowerCase()==='o').length
}


