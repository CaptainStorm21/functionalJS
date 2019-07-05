//sort() mutates
//myArray.slice().sort()

const myArray = [0, 10, 23, 232, 123, 2312, 43, 22];

const ascend = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

const sorted = myArray.slice().sort(ascend);
console.log(sorted);
//[ 0, 10, 22, 23, 43, 123, 232, 2312 ]


const descend = (a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
}
const sorted1 = myArray.slice().sort(descend);
console.log(sorted1);