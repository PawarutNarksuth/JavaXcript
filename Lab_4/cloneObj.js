const obj1 = {
    person : 'Anirach',
    weight : 85
}

const obj2 = Object.assign({},obj1) ;
// OR const obj2 = {... obj1};
obj2.weight = 45;
console.log(obj1);
console.log(obj2);