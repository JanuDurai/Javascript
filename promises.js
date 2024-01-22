//Promise response status
let fetchpromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
console.log(fetchpromise);
// fetchpromise.then((response)=>{
//     console.log(`Response ${response.status}`);
// })

// console.log("Requesting");

//Promise response data
// fetchpromise.then((response)=>{
//     var responsepromise =response.json();
//     responsepromise.then((data)=>{
//         console.log(`json file data - ${data[3].type}`);
//     })
// })

//Promise chaining
// fetchpromise.then((response)=>response.json())
//             .then((data)=>{
//                 console.log(`data - ${data[0].image}`);
//             })

// respondng to errors

// fetchpromise.then((response)=>{
//     if(!response.ok){
//         throw new Error(`Response status: ${response.status}`);
//     }
//     return response.json();
// })
//    .then((data)=>{
//     console.log(`data- ${data[4].name}`);
//    });

  
  //catching error
//   fetchpromise.then((response)=>{
//     if(!response.ok){
//         throw new Error(`Response status: ${response.status}`);
//     }
//     return response.json();
// })
//    .then((data)=>{
//     console.log(`data- ${data[4].name}`);
//    })
//    .catch((error)=>{
//     console.error(`Error in the data ${error}`);
//   });

//

  //multiplepromise

  let fetchpromise2 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found");
  let fetchpromise3 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
//   let fetchpromise3 = fetch("bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
//Promise all
//   Promise.all([fetchpromise,fetchpromise2,fetchpromise3])
//             .then((responses)=> {
//               for(const res of responses){
//                 console.log(`Response status : ${res.status}`);
//               }
//             })
//             .catch((error)=>{
//                     console.error(`Error: ${error}`);
//             })

//Promise any

// Promise.any([fetchpromise,fetchpromise2,fetchpromise3])
//              .then((response)=>{
//                 console.log(`Response: ${response.status}`);
//              })
//             .catch((error)=>{
//                 console.error(error);
//             })


