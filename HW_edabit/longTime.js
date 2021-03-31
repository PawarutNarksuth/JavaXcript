function longestTime(h , m ,s){
    let min = m/60 ;
    let sec = (s/60)/60;
    let resalut ;

    if(h > min && h > sec){
        return h;
    }
    else if(min > h && min > sec){
        return m;
    }
    else if(sec > h && sec > min){
        return s;
    }
}

console.log(longestTime( 1 , 59 ,3598));
console.log(longestTime( 2 , 300 , 15000));
console.log(longestTime( 15 , 955 , 59400));