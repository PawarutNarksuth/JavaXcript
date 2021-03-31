let values1 = ['Apple',1,false];
let values2 = ['Fries',2,true];
let valuse3 = ['Mars',9,'Apple'];

function display(va1,va2,va3){
    for(let i = 0 ; i < 3 ;i++){
        if(typeof(va1[i]) == typeof(va2[i]) && typeof(va1[i]) == typeof(va3[i]))
        {
            console.log("Array[",i,"] "+true);
        }
        else{
            console.log("Array[",i,"] "+false);
        }
    }
}

display(values1,values2,valuse3);