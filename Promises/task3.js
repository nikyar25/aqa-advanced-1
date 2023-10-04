async function getData() {
     try {
        const responseTodo = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const responseUser = await fetch("https://jsonplaceholder.typicode.com/users/1");

        const todo = await responseTodo.json();
        const user = await responseUser.json();

        console.log("Todo:", todo);
        console.log("User:", user);
    } catch (error) {
        console.error("Faile:", error);
    }
}

getData();





