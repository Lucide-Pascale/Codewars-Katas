new Promise(function (resolve, reject){
    setTimeout(()=>{resolve("Promise resolved after 2 seconds")},2000)
}).then((message)=>console.log(message))

console.log("Hey where do I run")

new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("I am trying to run first")},1000)
}).then((value)=>{console.log(value)})