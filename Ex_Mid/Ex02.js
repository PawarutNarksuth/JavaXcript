function keysandValue(obj){
    let arr = [];
    arr[0] = Object.keys(obj);
    arr[1] = Object.values(obj);

    return  arr;
}
console.log(keysandValue({a : 1, 
                        b : 2, 
                        c : 3}));
console.log(keysandValue({a : "apple", 
                        b : "Microsoft", 
                        c : "google"}));
console.log(keysandValue({Key1 : true, 
                        key2 : false, 
                        key3 : undefined}));