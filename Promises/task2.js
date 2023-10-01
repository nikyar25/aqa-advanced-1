function getTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((data) => data);
}

function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((data) => data);
}

Promise.all([getTodo(), getUser()])
    .then(([todo, user]) => {
        console.log("Todo:", todo);
        console.log("User:", user);
    })
    .catch((error) => {
        console.error("Faile:", error);
    });

Promise.race([getTodo(), getUser()])
    .then((result) => {
        console.log("Pass:", result);
    })
    .catch((error) => {
        console.error("Faile:", error);
    });