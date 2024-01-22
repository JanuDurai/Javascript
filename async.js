async function async_func(){
try{

          let fetchPromise = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
          if(!fetchPromise.ok){
              throw new Error(`Response status: ${fetchPromise.status}`)
          }
          var data=await fetchPromise.json();
          // console.log(`Json data is : ${data[4].name}`);
          return data;
}

catch{
  console.error(`Error : ${fetchPromise.error}`);
}
     
}

let json_data = async_func()
.then((response)=>{
  console.log(`Response : ${response[0].name}`);
})