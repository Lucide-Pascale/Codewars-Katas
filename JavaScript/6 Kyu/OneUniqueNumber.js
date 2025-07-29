function findUniq(arr) {
  return arr.filter((num)=> arr.indexOf(num)===arr.lastIndexOf(num)).reduce(()=> arr[0]);
}
