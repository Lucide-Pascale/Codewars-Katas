function isIsogram(str){
  arr=str.toLowerCase().split("")
  arr2=new Set(arr)
  return (arr2.size==arr.length)?true:false 
  
}
console.log(isIsogram("aba")) //false