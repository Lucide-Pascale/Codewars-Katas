function pigIt(str){
  //Code here
  return str.split(" ")
            .map((word)=>{
                arr=word.split("");
                first=arr.shift();
                arr.push(first);
                return (arr.length===1 && /^[^a-zA-Z0-9]+$/.test(first))?first: (arr.join(""))+"ay";
      
  })
  .join(" ");
}

console.log(pigIt('Pig latin is cool'))