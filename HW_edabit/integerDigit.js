function count(num){

    for(let i = 0 ; i < num.toString().length ; i++){
        if(num.toString()[i] == "-"){
            return num.toString().length - 1 ;
        }
    }

    return num.toString().length;
}

console.log(count(318));
console.log(count(-92563));
console.log(count(4666));
console.log(count(-314890));
console.log(count(654321));
console.log(count(638476));