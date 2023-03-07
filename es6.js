const pi=3.14;
//pi=3; error

var array=[19,22,37,40,50];
for(let element=0;element<array.length;element++){
    console.log(array[element]);
}

{
    function foo () { return 1 }
    foo() === 1
    {
        function foo () { return 2 }
        console.log(foo() === 2);
    }
    console.log(foo() === 1);
}

(print)=>{
console.log("print");
}

//to check even
array.forEach(i=>{
    if(i%2==0)
     console.log(i);
})
//this
class details{
    constructor(name){
    this.name=name;
    }
    disp(){
        console.log(this.name);
    }
}
var object1=new details("janu");
object1.disp();
//default parameters, extended parameter
function add(num1,num2=10,...a)
{
    console.log(num1+num2);
    console.log(a.length);
}
add(2,33,"false");
function extend_parameter(num1,num2,...a){
    console.log(a.length);
}
extend_parameter(2,1,...array);

//template literal
console.log(`Array elements: ${array}`);
var num1=num2=10;
console.log(`addition: ${10+20}`);

var string='\\n';
console.log(`new line-escaping sequence:${string}`);


//binary and octal rep
var binary=0b1101;
var octal=0o47;
console.log(`binary to decimal: ${binary},octal to decimal: ${octal}`);

var list = [ 1, 2, 3 ]
var [ a, b,c ] = list
[ b, a, c ] = [ a, b ,c]
console.log(list);
//destructing object matching

var object2={name:"janu", age:20,dept:"eee"};

function student_details({name,age,dept}){
    console.log(`student name: ${name}\n student age: ${age}\n student department: ${dept}`);
}
//destructing object matching deep learn
student_details(object2);

var object3={name:{first_name:"janu",middle_name:"shree",last_name:"durai"}};
function printname({name:{first_name}}){
  console.log(`first name: ${first_name}`);
}
printname(object3);
//default parameter
var obj = { a: 1, b: 4, c: 2 }
        var list = [1]
        var { a, b = 2 } = obj
        var [x, y = 2] = list
        console.log(x);
        console.log(obj.c);
//
function passing_parameter1({name,age}){
    console.log(name,age);
}
function passing_parameter2({name:n,age:a}){
    console.log(n,a);
}
function passing_parameter3([name,age]){
    console.log(name,age);
}

passing_parameter1({name:"janu",age:20});
passing_parameter2({name:"janu",age:20});
passing_parameter3(["janu",20]);
//fail soft destruction
var list = [7, 42]
        var [a = 1, b = 2, c = 3, d] = list;
        console.log(a === 1);
        console.log(a === 7);
        console.log(c === 3);
        console.log(d === undefined);
        console.log(b===2);
export function sum (x, y) { return x + y }
export var pi = 3.141593

//  someApp.js
import * as math from "lib/math"
console.log("2π = " + math.sum(math.pi, math.pi))

//  otherApp.js
import { sum, pi } from "lib/math"
console.log("2π = " + sum(pi, pi))