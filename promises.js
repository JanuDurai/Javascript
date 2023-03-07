const reach= new Promise((resolve,reject)=>{
    const reached = true
    if(reached){
        setTimeout(resolve,2000,"Dharan has reached")
    }
    else{
        reject("Dharan has not reached")
    }
})
const reachA= new Promise((resolve,reject)=>{
    const reached = true
    if(reached){
        setTimeout(resolve,1000,"Dharanesh has reached")
    }
    else{
        reject("Dharanesh has not reached")
    }
})
const reachB= new Promise((resolve,reject)=>{
    const reached = true
    if(reached){
        setTimeout(resolve,3000,"Don has reached")
    }
    else{
        reject("Don has not reached")
    }
})
// Promise.all([reach,reachA,reachB])
// .then((msg)=>console.log(msg))
// .catch((msg)=>console.log(msg))

//All=>Returns any one of value false..or else returns when all are true

// Promise.allSettled([reach,reachA,reachB])
// .then((msg)=>console.log(msg))
// .catch((msg)=>console.log(msg))

//allSetteled => When all get a value

// Promise.any([reach,reachA,reachB])
// .then((msg)=>console.log(msg))
// .catch((msg)=>console.log(msg))
//any will return if any one is get true..

// Promise.race([reach,reachA,reachB])
// .then((msg)=>console.log(msg))
// .catch((msg)=>console.log(msg))

//Like an .all() method..but return any one is true / false