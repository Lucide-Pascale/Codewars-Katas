function findOutlier(integers){
  //your code here
  arr=integers.filter(integer=>integer%2===0);
  if(arr.length>1){
    return Number(integers.filter(integer=>integer%2!==0))
  }
  return Number(arr)
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])) // 11