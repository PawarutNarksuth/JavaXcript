function inclusiveArray(startNum , EndNum){
    let resualt = [];
    let count = 0 ;
    
    if(startNum < EndNum)
    {
        for(let i = startNum ; i <= EndNum ; i++){
            resualt[count] = i;
            count++;
        }
    }
    else{
        resualt[count] = startNum;
        return resualt;
    }

    return resualt;
}

console.log(inclusiveArray(1 , 5));
console.log(inclusiveArray(2 , 8));
console.log(inclusiveArray(10 , 20));
console.log(inclusiveArray(17 , 5));