function secondLargest(NumAR){
    NumAR.sort(function(a, b){return b-a});
    
    return NumAR[1] ;
}

console.log(secondLargest([10,40,30,20,50]));
console.log(secondLargest([25,143,89,13,105]));
console.log(secondLargest([54,23,11,17,10]));