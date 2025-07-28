function duplicateEncode(word){
    // ...
    const arr=word.toLowerCase().split("")
    return arr.map((letter)=>{
                if(arr.indexOf(letter)===arr.lastIndexOf(letter)){
                    return "("
                }
                else{
                    return ")"
                }
                })
               .join("");
}
console.log(duplicateEncode("greatgrea")) // returns ))))())))


