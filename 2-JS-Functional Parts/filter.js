//filters are used for specific feature ie finding even

//myarray.filter(element => {
//filtering code
//   return true;
//   false
//});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
//old method 
var evenNums = []
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNums.push(numbers[i]);
    }
}

//use filter
const isEven = x => x % 2 === 0;
const evenNumbers = numbers.filter(isEven)
console.log(evenNumbers)

//write as anon funct
const even2Nums = numbers.filter(x => x % 2 === 0)
console.log(`filtering 2nd style ${even2Nums} `)

//find all words with letters greater than 5
const words = ["apple", "orange", "pear", "banana", "raspberry", "peach"];
const isLongerThan5 = word => word.length > 5;
const longWords = words.filter(isLongerThan5);
console.log(`These are words longer than 5 ${words}`);

//testing if words are longer than 5
const createLengthTest = minLength => word.length > minLength;

const longWords = words.filter(createLengthTest(5));
console.log(longWords);