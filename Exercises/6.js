async function fetchUserTodos(){
    const usersUrl= "https://jsonplaceholder.typicode.com/users";
    const todosUrl= "https://jsonplaceholder.typicode.com/todos";

    try{
        const [usersRes,toDosRes]= await Promise.all([fetch(usersUrl),fetch(todosUrl)])

        if(!usersRes.ok) throw new Error("Failed to fetch users")
        if(!toDosRes.ok) throw new Error("Failed to connect to Do")
        
        const users=await usersRes.json();
        const todos=await toDosRes.json();

        const combined= users.map(user=>{
            return{...user, todos: todos.filter(todo=>todo.userId ===user.id)}
        })

        return combined
    }catch(error){
        console.error("Error fetching data:", error.message);
        throw error;
    }
}

fetchUserTodos().then(data=>console.log(data[0].todos)).catch(err=>console.error(err))