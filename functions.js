var array=["mango","apple","guava","grapes"];
console.log("predefined function:  ")
array.forEach(element=>console.log(element));
console.log("user defined function:  ")
printeachelement();
function printeachelement(){
    for(i=0;i<4;i++)
      console.log(array[i]);
    }
 console.log("random number: " + Math.floor(Math.random()*2));
var add_result=addition(6);
 function addition(num1,num2=5){
    return num1+num2;
 }
 console.log("Paramaterized function and default parameter: " + add_result);
 console.log("Default parameter value:  "+ array.join())

 
 