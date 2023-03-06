if(4>5){
   var global_scope=10;
}
else{
   var global_scope=20;
}
console.log(`var value is ${global_scope}`)
if(2>3){
   let let_var=10;
}
else{
    let let_var=20;
}
console.log(`let var value is ${let_var}`);

if(23>3){
    const const_var=10;
}
else{
    const const_var=20;
}
console.log(`const var value is ${const_var}`)

function outer_func(){
    let outer_var=10;
    function inner_func(){
        outer_var=50;
    }
  inner_func();
    console.log(`outer function variable ${outer_var}`)
}
outer_func();

function closure_func()
{
    let outer_var=20;
    function closure_innerfunc(){
        outer_var=100;
        console.log(`outerclosure function var : ${outer_var}`)
    } 
   return closure_innerfunc;
}
     var func_return=closure_func();
     func_return();
