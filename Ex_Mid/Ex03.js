function dropRigth(arr){

    if(arguments.length < 2){
        arguments[0].pop();
    }
    else{
        for(let i = 0 ; i < arguments[1] ;i++){
            arguments[0].pop();
        }
    }
    return arguments[0];
}

console.log(dropRigth([1,2,3]));
console.log(dropRigth([1,2,3] , 2));
console.log(dropRigth([1,2,3] , 5));
console.log(dropRigth([1,2,3] , 0));