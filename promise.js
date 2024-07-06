//promise
//three state
//1) resolve. 2)reject. 3)pending 

function fun(task){
    return new Promise((resolve, reject)=>{
        if(task){
            resolve("Complected");
        }
        else{
            reject("Not Completed");
        }
    })
}
let onResolve=(res)=>{
    console.log(res);
}
let onReject=(rej)=>{
    console.log(rej);
}
fun(false).then(onResolve).catch(onReject);