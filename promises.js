// //Promise response status
// // let fetchpromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
// let fetchpromise = fetch("https://run.mocky.io/v3/43e28857-1b86-42e0-96d5-b6dac4409ffc")
// // console.log(fetchpromise);

// // fetchpromise.then((response) => {
// //   console.log(`Response ${response.status}`);
// // })

// // console.log("Requesting");

// //Promise response data
// // fetchpromise.then((response)=>{
// //     var responsepromise =response.json();
// //     responsepromise.then((data)=>{
// //         console.log(`json file data - ${data.msg}`);
// //     })
// // })

// //Promise chaining
// // fetchpromise.then((response)=>response.json())
// //             .then((data)=>{
// //                 console.log(`data - ${data.msg}`);
// //             })

// // respondng to errors

// // fetchpromise.then((response) => {
// //   if (!response.ok) {
// //     throw new Error(`Response status: ${response.status}`);
// //   }
// //   return response.json();
// // })
// //   .then((data) => {
// //     console.log(`data- ${data.msg}`);
// //   });


// //catching error
// //   fetchpromise.then((response)=>{
// //     if(!response.ok){
// //         throw new Error(`Response status: ${response.status}`);
// //     }
// //     return response.json();
// // })
// //    .then((data)=>{
// //     console.log(`data- ${data.name}`);
// //    })
// //    .catch((error)=>{
// //     console.error(`Error in the data ${error}`);
// //   });

// //

// //multiplepromise

// let fetchpromise2 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found");
// let fetchpromise3 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
// // let fetchpromise3 = fetch("bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");

// //Promise all
// //   Promise.all([fetchpromise,fetchpromise2,fetchpromise3])
// //             .then((responses)=> {
// //               for(const res of responses){
// //                 console.log(`Response status : ${res.status}`);
// //               }
// //             })
// //             .catch((error)=>{
// //                     console.error(`Error: ${error}`);
// //             })

// //Promise any

// // Promise.any([fetchpromise,fetchpromise2,fetchpromise3])
// //              .then((response)=>{
// //                 console.log(`Response: ${response.status}`);
// //              })
// //             .catch((error)=>{
// //                 console.error(error);
// //             })

// // // Promise allsettled
// //       Promise.allSettled([fetchpromise,fetchpromise2,fetchpromise3])
// //            .then((response)=>{
// //                  for(let res of response)
// //                  console.log("response of allsettled promises: ",res.status);
// //            })
// //            .catch((error)=>{
// //                             console.error(error);
// //                         })


// //Promise race


// // Promise.race([fetchpromise,fetchpromise2,fetchpromise3])
// //      .then((response)=>{
// //       console.log("response of allsettled promises: ",response.status);
// // })
// // .catch((error)=>{
// //                  console.error(error);
// //              })

// // Promise object



//  var promise = new Promise (function(resolve,reject){
//   let t=false;
//   if(t){
//     resolve("Request resolved");
//   }
//   else{
//     reject('Error')
//   }
  
//   })
  
//      .then((result)=>{
//     console.log(result)
//   }).catch((err)=>console.error(err))


// function timedelayfunction(personname, delaysecond) {
//   return new Promise((resolve, reject) => {
//     if (delaysecond < 0){
//       // reject("Give valid delay seconds");
//     throw new Error("Seconds are in negative");
//     }
//     else{
//     setTimeout(() => {
//       resolve(`wake up ${personname}`)
//         }, delaysecond);
//     }
//   });
// }

// timedelayfunction("janu",-3000)
// // timedelayfunction("janu",3000)

//  .then((response)=>{
//   console.log(response)
//  })
//  .catch((error)=>{
//   console.error(error)
//  })
 



//  function timedelayfunction(personname, delaysecond) {
//   return new Promise((resolve, reject) => {
//     if (delaysecond < 0)
//       throw new Error("Give valid delay seconds");
//     setTimeout(() => {
//       resolve(`Its time to wake up ${personname}`)
//     }, delaysecond);
//   });
// }
// async function promisefunction(){
// try {
//   // let promiseobj = await timedelayfunction("janu",3000);
//   let promiseobj = await timedelayfunction("vinu",-3000);

//   console.log(promiseobj);
// }
// catch(error){
//   console.error(error);
// }
// };
  
// promisefunction();

async function async_func(){
  try{
  
            let fetchPromise = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
            if(!fetchPromise.ok){
                throw new Error(`Response status: ${fetchPromise.status}`)
            }
            var data=await fetchPromise.json();
            // console.log(`Json data is : sa${data[4].name}`);
  
            // console.log("request started");
            return data;
  }
  
  catch{
    console.error(`Error : ${fetchPromise.error}`);
  }
       
  }
  // async_func();
  
  
  let json_data = async_func()
  .then((response)=>{
    console.log(`Response : ${response[0].name}`);
  })