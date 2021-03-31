function createQuote(quote,callback){
    let myQuote = "Like I always say , "+quote;
    callback(myQuote);
}

function logQuote(quote){
    console.log(quote + 'yes..');
}

createQuote("you will getting better!" ,logQuote);