function addition(num1,callback){
    var result=num1+num1;
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

//function Step1(result){
    // return result+1;
    // }
    
    // function Step2(result){
    // return result+1;
    // } 
    
    // function Step3(result){
    // return result+1;
    // } 
    
    // function result_func(result){
    // var res = Step1(result);
    // res = Step2(res);
    // res = Step3(res);
    // console.log(res);
    // }
    // result_func(0);
    
    //callback
    
    // function Step1(result,callback){
    // result++;
    // callback(result);
    // }
    
    // function Step2(result,callback){
    // result++;
    // callback(result);
    // } 
    
    // function Step3(result,callback){
    // result++;
    // callback(result);
    // } 
    
    // function result_func(result)
    // {
    // Step1(result,(result1)=>{
    // Step2(result1,(result2)=>{
    // Step3(result2,(result3)=>{
    // console.log(result3);
    // });
    // })
    // });
    // }
    
    // result_func(1);
    
    