
function numberSprit(number){
    let num1 = number / 2 ;
    let ar = [];

    if(number % 2 == 0){
        ar = [num1 , num1];
    }
    else{
        ar = [Math.ceil(num1 - 1 ) , Math.ceil(num1)];
    }
    
    return ar;
}

console.log(numberSprit(4));
console.log(numberSprit(10));
console.log(numberSprit(11));
console.log(numberSprit(-9));