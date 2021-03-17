const people = ["Aaron","Mel","John"];
const one1 = 1;
const str = "Hello World";
const b = true;
const employee = {
    firstName = "Anirah",
    LastName = "Mingkhwan",
};

function sayHello(person){
    console.log("Hello"+ person.firstName);
}

console.log(typeof people);
console.log(typeof sayHello);
console.log(employee instanceof Array);
sayHello(employee);