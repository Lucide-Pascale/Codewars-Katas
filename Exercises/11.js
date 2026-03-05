function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}

async function asyncCounter(){
    let results=[];
    for(let i=1; i<=5; i++){
        await delay(1000);
        console.log(i);
        results.push(i);
    }

    return results;

}

asyncCounter().then(numbers => {
  console.log("Final result:", numbers);
});