function addition(num1,callback){
    var result=num1+1;
    callback(result);
}

function multiplication(num1,callback){
    var result=num1*2;
    callback(result);
}

function division(num1,callback){
      var result=num1/2;
      callback(result);
}

function func_call(){
    addition(10,(result1)=>{
        multiplication(result1,(result2)=>{
            division(result2,(result3)=>{
                console.log(`The result is ${result3}`);
            });
        });
    });
}
func_call();
