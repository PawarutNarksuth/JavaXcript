function reverseAndNot(Number){
    let total = "";
    
    for(let i = Number.toString().length - 1 ; i >= 0 ;i--){
        total += Number.toString()[i];
    }
    return total+Number; 

}
console.log(reverseAndNot(123));
console.log(reverseAndNot(152));
console.log(reverseAndNot(123456789));