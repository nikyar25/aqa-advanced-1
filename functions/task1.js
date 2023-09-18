function calculateRectangleAreaDeclarationCustom(width, height) {
    return width * height;
}

const calculateRectangleAreaExpressionCustom = function(width, height) {
    return width * height;
};

const calculateRectangleAreaArrowCustom = (width, height) => width * height;

const width = 5;
const height = 10;
console.log("Function Declaration:", calculateRectangleAreaDeclarationCustom(width, height));
console.log("Function Expression:", calculateRectangleAreaExpressionCustom(width, height));
console.log("Arrow Function:", calculateRectangleAreaExpressionCustom (width, height));