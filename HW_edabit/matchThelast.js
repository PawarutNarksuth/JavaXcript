function matchLastItem(arr){
    let re_arr = "";
    
    for(let i = 0; i < arr.length -1 ;i++){
        re_arr += arr[i];
    }
    
    if(re_arr == arr[arr.length-1]){ 
        return true;
    }
    else{
        return false;
    }
}

console.log(matchLastItem([8 , "thunder" ,true ,"8thundertrue"]));
console.log(matchLastItem([1 , 1 , 1 , "11"]));
console.log(matchLastItem(["req" , "6hi" , "g" ,"req6hig"]));