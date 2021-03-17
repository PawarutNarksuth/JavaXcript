function simplePair(){
    let totle = 1;
    let getNum = [];

    for(let i = 0 ; i < arguments[0].length ; i++){
        for(let j = 1 ; j < arguments[0].length ; j++){
            totle = arguments[0][i] * arguments[0][j];  
            if(totle == arguments[1]){
                if(arguments[0][i] == arguments[0][j]){
                    getNum[0] = null;
                }
                else{
                    getNum[0] = arguments[0][i];
                    getNum[1] = arguments[0][j];               
                }
            }
        }
    }
    return getNum;
}

console.log(simplePair([1,2,3], 3));
console.log(simplePair([1,2,3], 6));
console.log(simplePair([1,2,3] , 9));