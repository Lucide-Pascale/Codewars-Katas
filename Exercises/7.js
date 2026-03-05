async function getPost(){
    try{

    res= await Promise.any([fetch("https://dummyjson.com/posts").then(res=>res.json()),
                            fetch("https://this-may-not-exist.com/posts").then(res=>res.json()),
                            fetch("https://this-may-not-exist.com/posts").then(res=>res.json()),
                            fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()),

    ] )
    return res;
    } catch(error){
        console.log("The error is"+error)
    }

}

getPost().then(data=>console.log(data))