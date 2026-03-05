const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetchToDo(url){
    const xhr= new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onload=function(){
        if(xhr.status>=200 && xhr.status<300){
        try{
            const data=JSON.parse(xhr.responseText)
            console.log(data)
        }catch(err){
            console.error("Error :"+err.message)
        }
        }else{
            console.error(xhr.statusText)
        }
    }
    xhr.onerror=function(){
        console.log("Network Error")
    }

    xhr.onabort=function(){
        console.log("Request Aborted")
    }
    xhr.send();
}

fetchToDo("https://jsonplaceholder.typicode.com/todos/1")