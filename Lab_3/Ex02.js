let furiture = ['table','chairs','couch'];

function display(ft){
    for(let i = 0 ; i < ft.length ; i++){

        for(let char of ft[i]){
            console.log(char);
        }
    }
}

display(furiture);