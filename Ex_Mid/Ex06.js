function additivePersistence (Num , count = 1){
    let ARnum = Num.toString().split('');
    let Cknum = 0;

    if(ARnum.length < 2){
        return 0;
    }
    for(let i = 0 ; i < ARnum.length ; i++){
        Cknum += parseInt(ARnum[i]);
    }

    let STRck = Cknum.toString(); // แปลงเป็น toSting หรือ Int ต้องมีตัวมาเก็บ
    if(STRck.length >= 2){
        parseInt(Cknum);
        return additivePersistence(Cknum , ++count);
    }else{
        return count;
    }
}

console.log(additivePersistence(1679583));
console.log(additivePersistence(123456));
console.log(additivePersistence(6));