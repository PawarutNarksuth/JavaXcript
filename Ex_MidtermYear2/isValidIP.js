function isValidIP(str){
    let IP = str.split('.');
    let check = true ;
    let count = 0 ;

    for(let i = 0 ; i < str.length ; i++){ 
        if(str.charAt(i) == '.'){
            count++;
        }
    }
    if(count > 3 || count < 3){ //นับว่า . มีมากกว่า 3 ไหม และ น้อยกว่า 3 ไหม
        check = false;
    }
    
    for(let row = 0 ; row < IP.length ;row++){ // เช็คว่ามีตัวที่เริ่มต้นด้วย 0 ไหม
        for(let col = 0; col < IP[row].length ;col++){
            if(IP[row][0] == "0"){
                check = false;
            }
        }
    }

    for(let i = 0 ;i < IP[i].length ;i++){ //เช็คว่ามี ออฟเต็ดไหนมากกว่า 255 ไหม
        if(IP[i] > 255){
            check = false;
        }
    }
    return check;
}

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));
