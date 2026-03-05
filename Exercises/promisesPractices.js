const p= new Promise((resolve, reject)=>{
    queueMicrotask(()=>{
    setTimeout(()=>{
        resolve("done")
    },5000)})

    reject("not done")
});

p.then(result=>console.log(result)).catch(result=>console.log(result)).finally(a=>console.log("We're officially done"))

