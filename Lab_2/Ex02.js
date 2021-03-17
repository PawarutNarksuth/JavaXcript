
function equation(str){
    let num1 ="";
    let operator ="";
    let numberA = [];

    for(let i = 0;i < str.length;i++){
        let c1 = 0;
        for(let j = 0;j < 10;j++){

            if(parseInt(str[i]) == j){
                num1 += str[i];
                c1++;
            }
            else if(j == 9 && c1 == 0){
                operator += str[i];
                num1 += ",";
            }
        }
    }
    numberA = num1.split(',');

    let resalt = parseInt(numberA[0]);

    for(let l = 1 ; l < numberA.length ;l++){

        if(operator[l-1] == "+"){
            resalt += parseInt(numberA[l]);
        }
        else if(operator[l-1] == "-"){
            resalt -= parseInt(numberA[l]);
        }
        else if(operator[l-1] == "*"){
            resalt *= parseInt(numberA[l]);
        }
    }
    return resalt;
}
console.log(equation("50+30+9"));    
