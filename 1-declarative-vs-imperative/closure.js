/*
 * closure is a function that returns another function.
 * the function that we return still has acccess to the intenral scope of the function that returns in
 */

const giveMeAFunction = () => {
    const x = 5;
    return () => console.log(`x is ${x}`);
}

const createPrinter = () => {
    const myFavNumber = 23;
    console.log(myFavNumber)

    return () => console.log(`My favorite number is ${myFavNumber}`)
}

const printer = createPrinter();
printer();

