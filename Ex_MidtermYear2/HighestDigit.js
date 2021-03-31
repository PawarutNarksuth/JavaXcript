function HighestDigit(number){

    let num = number.toString().split('');
    let Maxnum = '0' ;

    for(let i = 0 ; i < num.length ;i++){

        if(Maxnum < num[i]){
            Maxnum = num[i];
    }
    }


    return Maxnum;
}

console.log(HighestDigit(379));
console.log(HighestDigit(2));
console.log(HighestDigit(377401));