const add = (x, y, z) => x + y + z;
//console.log(add.toString());

//call --- calls a function
console.log(add.call(null, 1, 2, 3));

//apply
console.log(add.apply(null, [1, 2, 3]));

const args = [2, 1, 3];
console.log(add(...args));


//bind - fixed x = 1 ... y + x are dynamic
const add1 = add.bind(null, 1);
console.log(add1(9, 8));