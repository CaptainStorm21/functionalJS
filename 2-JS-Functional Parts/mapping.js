//old looping
const numbers = [231, 23123, 233, 123, 2, 12]
const doubledNums = [];

for (let i = 0; i < numbers.length; i++) {
    const doubled = numbers[i] * 2;
    doubledNums.push(doubled);
}

//destoyes the original array
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
}

//myarray.map()

numbers.reverse();
//mutation should be avoided
console.log(numbers);

//a bit better not conceptually understandle
const numbers1 = [231, 23123, 233, 123, 2, 12]
const doubleNums = [];
for (let i = 0; i < numbers1.length; i++) {
    doubledNums.push(numbers1[i]*2)
}

//myarray.map()
const numbers4 = [12, 23, 22, 53]
const doublex = x => x * 2;
const dNums = numbers4.map(doublex)
console.log(`new array ${dNums}`)

