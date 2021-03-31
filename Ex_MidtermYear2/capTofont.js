function capTofont(str){

    let strRe1 = "";
    let strRe2 = "";

    for(let i = 0 ; i < str.length ; i++){

        if(str[i] == str[i].toUpperCase()){
            strRe1 += str[i];
        }
        else{
            strRe2 += str[i];
        }
    }

    return strRe1 + strRe2  ;
}

console.log(capTofont("hApPy"));
console.log(capTofont("moveMENT"));
console.log(capTofont("shOrtCAKE"));