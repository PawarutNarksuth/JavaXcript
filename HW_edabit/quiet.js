function shh(str){
    let result = "";
    
    if(str != ""){
        if(str[0] == str[0].toUpperCase()){
            result += str[0].toLowerCase();
        }
        else{
            result += str[0].toUpperCase();
        }
    }
    else{
        result = str;
    }

    for(let i = 1 ; i < str.length ;i++){
        if(i >= 1){
            result += str[i].toLowerCase();
        }
    }
    return  "'"+'"' +result  +'"' + ", whispered Edabit."+"'";
}

console.log(shh("HI THERE!"));

console.log(shh("tHAT'S Pretty awseOme"));

console.log(shh(""));