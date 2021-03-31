function sumTowSmallestNum(Num){
    let Big = 0;
    
    let Smallest = [];

    for(let i = 0 ; i < Num.length ; i++){  //ได้ตัวที่มากที่สุดใน array
        if(Num[i] > Big && Num[i] > 0){
            Big = Num[i]
        }
    }

    let Big1 = Big;
    for(let i = 0 ; i < Num.length ; i++){ //ได้ตัวที่น้อยที่สุดใน array
        if(Big1 > Num[i] && Num[i] > 0){
            Big1 = Num[i];
        }
        Smallest[0] = Big1;
    }

    let Big2 = Big;
    for(let i = 0 ; i < Num.length ; i++){ //ได้ตัวที่น้อยที่สุดและไม่เท่ากับ Smallest[0]--> ตัวที่น้อยที่สุดใน array
        if(Big2 > Num[i] && Num[i] > 0 && Num[i] != Smallest[0]){
            Big2 = Num[i];
        } 
        Smallest[1] = Big2;
    }
    return Smallest[0] + Smallest[1];
}

console.log(sumTowSmallestNum([19,5,42,77,2]));
console.log(sumTowSmallestNum([10,343445353,3453445,3453545353453]));
console.log(sumTowSmallestNum([2,9,6,-1]));
console.log(sumTowSmallestNum([879,953,694,-847,342,221,-91,-723,791,-587]));
console.log(sumTowSmallestNum([3683,2902,3951,-475,1617,-2385]));
