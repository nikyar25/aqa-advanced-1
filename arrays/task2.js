const initialArray = [1, 2, 3, 4, 5];

const newArray = initialArray.map((value, index) => {
    return value * index;
});

console.log(newArray);