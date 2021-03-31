function arrayValuesType(arr){
    let arr2 = [];

    for(let i = 0 ; i < arr.length ; i++){
        arr2[i] = typeof(arr[i]);
    }

    return arr2;
}

console.log(arrayValuesType([1 , 2 , "null" , []]));
console.log(arrayValuesType(["214", true , false , 2 , 2.15 ,[] , null]));
console.log(arrayValuesType([21.1 , "float" , "array" , ["i am array"] , null , true ,214]));