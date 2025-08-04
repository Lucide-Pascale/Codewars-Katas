function moveZeros(arr) {
  let arr1=[];
  let arr2=[];
  arr.forEach((num)=>{
    if(num===0){
      arr2.push(num)
    }
    else{
      arr1.push(num)
    }
  })

  return arr1.concat(arr2)
}

