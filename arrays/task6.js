const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const copiedNumbersList = [...numbersList];

copiedNumbersList.sort((a, b) => a - b);

console.log("Вихідний масив:");
console.log(numbersList);

console.log("Відсортований масив:");
console.log(copiedNumbersList);