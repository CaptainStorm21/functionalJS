const employees = [
    {
        name: "",
        salary: 910000,

    },
    {
        name: "",
        salary: 9220000,

    },
    {
        name: "",
        salary: 910000,

    },
    {
        name: "",
        salary: 120000,

    }
]

const makesMoreThan300k = employee => employee.salary > 200000;
const result = employees.some(makesMoreThan300k);
console.log(result);


const teamMembers = ["shadow", "tim", "valery", ""]
const isNotEmpty = string => !!string;
const allNamesFilled = teamMembers.every(isNotEmpty);
console.log(allNamesFilled);