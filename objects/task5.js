var users = [
    {
        name: "Tom",
        email: "Tom1@gmail.com",
        age: 20
    },
    {
        name: "Anna",
        email: "Anna@gmail.com",
        age: 30
    },
    {
        name: "Sam",
        email: "Sam@gmail.com",
        age: 40
    }
];
for (var user of users) {
    var { name, email, age } = user;
    console.log( "Ім'я:",name);
    console.log("Email:", email);
    console.log("Вік:", age);
}
