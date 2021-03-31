function keyAndValue(obj){
    arr = [];
    arr[0] = Object.keys(obj);
    arr[1] = Object.values(obj);

    return arr;
}

console.log(keyAndValue({a:1 ,b:2,c:3}));
console.log(keyAndValue({a:"Apple" ,b:"Microsoft",c:"Google"}));
console.log(keyAndValue({Key1:true ,Key2:false,Key3:undefined})); 