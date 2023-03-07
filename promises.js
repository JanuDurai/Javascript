var booked=new Promise((response,reject)=>{
    let status=false;
    if(status){
        response();
    }
    else
        reject();
  })
    booked.then(()=>{
        console.log("You have booked the ticket");
    })
    .catch(()=>{
        console.log("You have not booked the ticket");
    })

