//function as data
const sayHello = () => console.log("say Hello")

const sayHello2 = sayHello;
sayHello2();


const sayHello3 = (city) => console.log("Hello " + city);
const sayHello4 = sayHello3;
sayHello4("Oslo");

const myFunct = true
    ? () => console.log('First Option')
    : () => console.log('Second option')

const DEVELOPMENT = true;
const fetchDataReal = () => {

}

const fetchDataFake = () => ({
    name: "david",
    age: 3,

})

const fetchData = DEVELOPMENT
    ? fakeDataFake
    : fetchDataReal;