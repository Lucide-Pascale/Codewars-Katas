function solution(number){
  let arr1=[];
  let arr2=[];
  for (i=3;i<number;i++){
    if((i%3)===0){
      arr1.push(i); // Array of multiples of 3
    }
  }
  for (i=5;i<number;i++){
    if((i%5)===0){
      arr1.push(i); // Array of with multiples of 5 added
    }
  }
  
  arr2=[...new Set([...arr1])]; // removing Duplicates
  return arr2.reduce((acc,curr)=> acc+curr, 0) // Sum of elements in the Array
}

console.log(solution(10)) //23