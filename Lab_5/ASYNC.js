function PromiseTimeOut(ms){
    return new Promise((resolve , reject) =>{
        setTimeout(resolve , ms);
    })
}

async function run(){
    console.log("start!");

    await PromiseTimeOut(2000);
    console.log("stop!!");
}

run();