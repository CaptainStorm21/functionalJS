//slice is not high level function


const nums = [232, 223, 1, 12, 343, 90, 777, 4444]

//mutation
/*
nums.sort()
nums.reverse()
nums.push()
nums.pop()
*/


//non-mutation  --- slice
//returns a copy
//console.log(nums.slice(1, 3));

//copy of the array
//console.log(nums.slice());

//to prevent mutations
console.log(nums.slice().reverse());
console.log(nums.slice().sort());
console.log(nums)


