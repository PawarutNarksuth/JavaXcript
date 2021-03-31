function removeDups(Num){
    let Save = 0;
    
    for(let i = 0 ; i < Num.length ; i++){
        for(let j = i + 1 ; j < Num.length ; j++){
            if(Num[i] == Num[j]){
                Save++;
                //break;
            }
        }
    }

    for(let re = 0 ; re < Save ;re++){
        Num.pop();
    }

    return Num;
}

console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","Big","cat"]));
console.log(removeDups(["John","Taylor","John"]));