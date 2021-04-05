function isIsogram(Iso){

    for(let first = 0 ; first < Iso.length ; first++){
        
        for(let sec = first+1 ; sec < Iso.length ; sec++){
            if(Iso[first] == Iso[sec] || Iso[sec] == Iso[first].toUpperCase()){
                return false;
            }
            //console.log(first + " " + sec);
            else if(Iso[first] != Iso[sec] && first == Iso.length-2){
                return true;
            }
        }
    }
}

console.log(isIsogram("Algorism"));
console.log(isIsogram("PasSword"));
console.log(isIsogram("consecutive"));