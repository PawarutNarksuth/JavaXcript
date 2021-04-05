function oneOddOneEven(number){
    let num = number.toString();
    let ck = "";
    for(let i = 0 ;i < num.length ;i++){
        if(num[i] % 2 != 0){
            ck += 1;
        }
        else{
            ck += 0;
        }
    }

    if(ck == "01" || ck == "10"){
        return true;
    }
    else{
        return false;
    }

}

console.log(oneOddOneEven(12));
console.log(oneOddOneEven(55));
console.log(oneOddOneEven(22));
