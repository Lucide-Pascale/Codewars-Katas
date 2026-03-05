function fetchData() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            const data = "Data fetched successfully!";
            resolve(data)
        }, 1000);

    })

}

fetchData().then(data=>console.log(data))