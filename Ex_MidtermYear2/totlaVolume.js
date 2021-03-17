function totalValume(){
    
    let total2 = 0;

    for (let i = 0 ; i < arguments.length ; i++){
        let total = 1;
        for(let j = 0 ; j < arguments[i].length ;j++){
           total *= arguments[i][j] ;
        }
        total2 += total;
    }
    return total2;
}

console.log(totalValume([4 , 2 , 4 ],[3, 3, 3] , [1,1,2] ,[2,1,1]));
console.log(totalValume([2,2,2 ],[2,1,1] ));
console.log(totalValume([1,1,1]));