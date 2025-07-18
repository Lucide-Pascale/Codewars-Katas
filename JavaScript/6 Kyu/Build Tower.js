function towerBuilder(nFloors) {
  if (nFloors<=0){
    return [];
  }
  else{
   
    b="*";
    c=' '.repeat(nFloors-1)+"*"+' '.repeat(nFloors-1)
    arr=[c]
    for(i=1;i<nFloors;i++){
        b=b+"**";
      a=' '.repeat(nFloors-1-i)+b+' '.repeat(nFloors-1-i);
      arr[i]=a;
    }
    return arr;
  }
}
console.log(towerBuilder(3))



