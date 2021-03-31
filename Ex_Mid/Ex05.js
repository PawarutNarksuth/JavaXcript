function starRating(arr){
    let total1 = 0;
    let cal = 1;
    let total = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] ;
    let check = 0;
    let star = "";

    for(let i = 0 ; i < arr.length ;i++){
        total1 += arr[i] * cal;
        cal++;
    }

    check = total1 / total
    if(Math.round(check) != Math.ceil(check)){
        for(let i = 0 ; i < Math.round(check) ;i++){
            star += "*";
        }
    }
    else{
        
        for(let i = 0 ; i < Math.round(check) ;i++){
            star += "*";
        }
    }
    return "[" + check.toFixed(2) + "]" + star;
}
console.log(starRating([55,67,98,115,61]));
console.log(starRating([0,2,0,1,23]));
console.log(starRating([16,17,23,40,45]));
