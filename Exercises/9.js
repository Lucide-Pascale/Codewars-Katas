XMLHttpRequest=require("XMLHttpRequest").XMLHttpRequest

function myFetch(url){
    return new Promise((resolve,reject)=>{
        xhr= new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type","application/json")
        xhr.onload=function(){
            if(xhr.status>=200 && xhr.status<300){
                try{
                    const data=JSON.parse(xhr.responseText)
                    resolve(data)
                }catch(err){
                    reject("Failed")
                }
            }
            else{
                reject("It failed")
            }
        }

        xhr.onerror=function(){
            reject("Network Error")
        }

        xhr.send()

    })
    
}

myFetch('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));
