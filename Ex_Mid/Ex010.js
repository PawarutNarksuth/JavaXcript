function median(Num){
    let resalut = 0;

    if(Num.length % 2 != 0){
        resalut = (Num.length + 1) / 2;
        return Num[resalut-1];
    }
    else{
        let check = 0 , total = 0;
        resalut = Num.length / 2 ; 
        check = (Num.length + 2) / 2; 
        total  = (Num[resalut-1] + Num[check-1]) / 2 ;
        return total;
    }
}

console.log(median([1,2,4,5,6,8,8,8,10]));
console.log(median([2,2,6,8,8,10,10]));
console.log(median([1,2,2,4,7,8,9,10]));