function XO(str){
    let count_X =0;
    let count_O =0;

    for(let i = 0 ; i < str.length ;i++){
        if(str[i] == "x" || str[i] == "X"){
            count_X++;
        }
        else if(str[i] == "o" || str[i] == "O"){
            count_O++;
        }
    }

    if(count_X == count_O ){
        return true;
    }
    else if(count_X != count_O){
        return false;
    }
    else{
        return true;
    }
}

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));