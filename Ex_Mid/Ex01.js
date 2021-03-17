function remoceABC(str){
    let str1 = str.split('');
    let str2 = "";  
    let check = 0;
    
    for(let i = 0 ; i < str1.length ; i++){
        if(str1[i] >= "a" && str1[i] <= "c"){ //เช็คว่าเป็น a - c ไหม
            check++;
        }
    }
    if(check != 0){
        for(let j = 0 ; j < str1.length ; j++){
            if(str1[j] < "a" || str[j] > "c"){ //ถ้าไม่ใช่ a - c 
                str2 += str1[j];
            }
        }        
    }
    else{
        str2 = "null";
    }


    return str2;
}

console.log(remoceABC("this migth be a bit hard"));
console.log(remoceABC("hello world!"));
console.log(remoceABC(""));