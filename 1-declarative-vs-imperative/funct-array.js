//npx babel-node function-array.js

const addNum = number => number + 33


const functionsArray = [
    Math.sqrt,
    addNum,
]

var number = 22;

functionsArray.forEach(func => number = func(number));
console.log(number);