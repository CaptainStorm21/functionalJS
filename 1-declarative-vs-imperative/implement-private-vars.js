/*
 * create a person function const Person = {}
 * object destructuring - ({ name, age, job })
 * 
*/
 
const Person = ({ name, age, job }) => {
    var _name = name;
    var _age = age;
    var _job = job;
    //set getter 
    return {
        getName: () => _name,
        getAge: () => _age,
        getJob: () => _job,

     //set Setters
        setAge: newAge => _age = newAge,
     };
}

const me = Person({ name: "David Katz", age: 23, job: "IT" });
console.log(me.getAge())
me.setAge(111)
console.log(me.getAge())
