new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(1),2000)
}).then(function(result){
    console.log(result);
    return result+1;
}).then(function(result){
    console.log(result);
    return result+1;
}).then(function(result){
    console.log(result);
    return result+1;
})