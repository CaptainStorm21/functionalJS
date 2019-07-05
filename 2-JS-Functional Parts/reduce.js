/*
 * myArray.reduce((acc, element) => {
 *  ..
 *  return ...
 * });
 * 
*/

/*
 * const sum = myArray.reduce((acc, element) => return acc + element), 0);
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

const sum = numbers.reduce((acc, x) => {
    console.log(`acc is ${acc}`)
    console.log(`x is ${x}`);
    return acc + x
}, 0);
console.log(sum);