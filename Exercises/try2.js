// fetch("https://jsonplaceholder.typicode.com/invalid-url")
//   .then(response =>{
//     if(!response.ok){
//         throw new Error("Http Error"+response.status)
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(err=>console.error(err.message))
// -------------------------------------------------------------


// async function getPost(){
//     try{
//     const res= await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data= await res.json();
//     data.slice(0,5).forEach(element => {console.log(element.title)
        
//     });
   
//     } catch(err){
//         console.log(err)
//     }

// }

// getPost()
// --------------------------------------------------------------------------

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   headers: {
//     "Accept": "application/json",
//     "X-Custom-Header": "my-value"
//   }
// })
// .then(res => res.json())
// .then(console.log);

// -----------------------------------------------
// const controller = new AbortController();

// setTimeout(() => controller.abort(), 100);

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   signal: controller.signal
// })
//   .then(res => res.json())
//   .then(console.log)
//   .catch(err => {
//     if (err.name === "AbortError") {
//       console.log("Fetch aborted!");
//     }
//   });
// -----------------------------------------------------

const fetchUrl= "https://jsonplaceholder.typicode.com/posts/1"
controller= new AbortController();

setTimeout(()=>controller.abort(),10)
fetch(fetchUrl, {signal: controller.signal})
    .then(res=>{
        if(!res.ok){
            throw new Error("HTTP Error"+res.status)
        }

        return res.json();
    })
    .then(data=>console.log(data))
    .catch(err=>{if(err.name==="AbortError"){
        console.log("Fetch Aborted");
    }})