function digitalClock(scond){
    let h = Math.floor(((scond / 60)/60));
    let m = Math.floor(((((scond / 60)/60)-h)*60));
    let s = Math.round((((((scond / 60)/60)-h)*60)-m)*60);

    let ho = "", min = "" , sec = "";

    if(h % 10 != h){
        if(h >= 24){
            h = 0;
        }
            ho = h +":";
        }else{
            ho = "0" + h +":";
        }

    if(m % 10 != m){
        min = m +":";
    }else{
        min = "0" + m +":";
    }

    if(s % 10 != s){
        sec = s ;
    }else{
        sec = "0" + s ;
    }
    
    return  ho +""+ min +""+ sec;
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));
