function solution(number){
  let arr1=[];
  let arr2=[];
  for (i=3;i<number;i++){
    if((i%3)===0){
      arr1.push(i);
    }
  }
  for (i=5;i<number;i++){
    if((i%5)===0){
      arr1.push(i);
    }
  }
  
  arr2=[...new Set([...arr1])];
  return arr2.reduce((acc,curr)=> acc+curr, 0)
}

console.log(solution(10)) //23