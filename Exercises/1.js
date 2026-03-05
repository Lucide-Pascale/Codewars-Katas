// let a=0;
// setTimeout(()=>clearInterval(id),5000);
// id=setInterval(()=>console.log(++a),2000);

let a=0
const id=setInterval(()=>{
    a++;
    console.log(a);

    if(a===5){
        clearInterval(id);
    }
},2000)