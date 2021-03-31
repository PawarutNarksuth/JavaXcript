function criticalCode(){
    throw "throwing an excepton";
}

function logError(theException){
    console.log(theException);
}
//try..catch
console.log("\n*****Try..Catch*****\n");

try{
    criticalCode();
}catch(ex){
    console.log("Got an error");
    logError(ex);
}

//therwing in try.catch
console.log("\n*****Throwing in try..catch*****");

try{
    throw "An exception that is throw evert time";
}catch(ex){
    console.log("Got an error");
    logError(ex);
}

//Try..catch..finally
console.log("\n*****try..catch..Finally*****\n");

try{
    criticalCode();
}catch(ex){
    console.log("Got an error");
    logError(ex);
}finally{
    console.log("Code that always will run");
}

function hello(){
    console.log("\n*****Throwing Exception*****\n");
}