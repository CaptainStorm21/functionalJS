//taking some params from one function applying into another


const add = (x, y, z) => x + y + z;
const addPart1 = x => (y, z) => add(x, y, z);

const addPart2 = addPart1(5);
const sum = addPart2(6, 7);

console.log(sum)