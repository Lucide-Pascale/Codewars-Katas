async function getPostAbort(url,timeout=5){
controller= new AbortController();
setTimeout(()=>controller.abort(),timeout);

try{
    const response= await fetch(url,{signal:controller.signal});
    if(!response.ok) throw new Error(response.status)
    return response.json();
}catch(error){
    if(error.name==="AbortError"){
        // console.log("It was aborted")
    }
    console.log(error.message)
}

}

getPostAbort("https://jsonplaceholder.typicode.com/users",5).then(data=>console.log(data))
