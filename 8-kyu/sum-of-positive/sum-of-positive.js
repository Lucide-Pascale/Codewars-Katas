function positiveSum(arr) {
  return arr.filter(x=>x>0).reduce((sum,num)=>sum+num,0)
}