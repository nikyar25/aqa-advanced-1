function checkAgeCustom(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log("Завдання 2:");
console.log("Вік 25 років:", checkAgeCustom(25));
console.log("Вік 15 років:", checkAgeCustom(15));