if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success,failure);
    function success(position){
        console.log(`Here is the position: \n Latitude position:${position.coords.latitude}
        \n Longitude position: ${position.coords.longitude}`);
    }

    function failure(){
        console.log("Error in accessing the position");
    }
}