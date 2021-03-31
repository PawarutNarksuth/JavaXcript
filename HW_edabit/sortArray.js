function ascDesNone(){
    if(arguments[1] == "Asc"){
        return arguments[0].sort(function(a,b){return a-b});
    }
    else if(arguments[1] == "Des"){
        return arguments[0].sort(function(a,b) {return b-a});
    } 
    else{
        return arguments[0];
    }
}

console.log(ascDesNone([4 , 3 , 2 , 1] , "Asc"));
console.log(ascDesNone([7, 8, 11, 66] , "Des"));
console.log(ascDesNone([1, 2, 3, 4] , "None"));