//common division solution
const division = (x, y) => {

    if (y === 0) {
        console.log("Cannot divide by 0");
        return null;
    }

    return x / y;
}


//functional javascript
const divide2 = (x, y) => x / y;
const secondArgIsNotZero = func =>
    (...args) => {
        if (args[1] === 0) {
            console.log("Cannot divide by 0");
            return null;
        }
        return func(...args);
    }
const divideSafe = secondArgIsNotZero(divide2);
console.log(divideSafe(7, 2));