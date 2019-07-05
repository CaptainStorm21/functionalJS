const person = {
    name: "Jimmy Show",
    age: 32,
    hairColor: "black",
};

const careerData = {
    title: "CPA",
    company: "IBM",
};

//const bio = { ...person, ...careerData }
//console.log(bio);

const bio2 = { name: person.name, ...careerData }
console.log(bio2);

//update
const updates = {
    name: "Jimmy Morrison"
}

const updatedPerson = {
    ...person,
    ...updates,
    school: "USC",
}
console.log(updatedPerson);

/////////////////////////////////////////////////////////


const nums = [2, 1, 231, 213]
nums.push(89);
console.log(nums);

const newNums = [
    9000,
    ...nums,
    2123123
]
console.log(newNums)

/////////////////////////////////////////////////////////
