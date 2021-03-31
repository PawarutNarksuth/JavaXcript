function countTrue(boo){

    let count = 0;
    for(let i = 0 ; i < boo.length ;i++){
        if(boo[i] == true){
            count++;
        }
    }

    return count ;
}

console.log(countTrue([true , false , false , true ,false]));
console.log(countTrue([false ,false ,false, false]));
console.log(countTrue([]));