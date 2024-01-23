var promise = new Promise(function(resolve,reject) { 
    resolve("Function resolved");
    reject("Function rejected");
})
    promise.then((response)=>{

    })
async function async_func(){
    try{
     var fetchdata = await fetch("");
     
    }
    catch(error){
      throw new Error(error);
    }  
     
}

// let arrow_function = ()=>{
//     console.log("arrow function");
// }

// let arrow_function = 10; 

var arr = [11,20,30];
var sum=0;
for(const i of arr){
    sum+=i;
}

arr.reduce((accumulator,ele,i)=>{
      
    return accumulator
},[])

var odd_num=arr.filter((x)=>{
    return x%2==1
})

console.log(odd_num);

let string1 ="this is string1";
let string2 = "This is string2";
    console.log(string1.concat(string2));

    let palinstring="malayalam";
    console.log(palinstring[0]);
   let palin_length=palinstring.length/2;

    let length=palinstring.length -1;
    for(const i of palinstring){
       if(palinstring[i]===palinstring[length]&&i<palin_length)
       --length;
       else
          return false;
    }
    


    
   
