//best solution 
function solution(str, ending){
  return str.endsWith(ending);
}
//My solution
function solution(str, ending){
  if(ending.length===0){
    return true
  }
  a=(str.slice(-ending.length))===(ending)
  return a===true?true:false
}

solution('abc', 'bc') //true