const pi = 3.14;
// pi=3; error
//const obj
const const_obj = {};
const_obj.name = "janu";
const_obj.name = "shreee";
console.log(`Constant obj properites can be mutable: ${const_obj.name}`);

var array = [19, 22, 37, 40, 50];

console.log("block scope function");
{
    function foo() { return 1 }
    foo() === 1
    {
        function foo() { return 2 }
        console.log(foo() === 2);
    }
    console.log(foo() === 1);
}

const print = (print) => {
    console.log("print");
}
print();

// //to check even
console.log("Even numbers:")
array.forEach(i => {
    if (i % 2 == 0)
        console.log(i);
})
// //this
console.log(`object creation`);
class details {
    constructor(name) {
        this.name = name;
    }
    disp() {
        console.log(this.name);
    }
}
var object1 = new details("janu");
object1.disp();


//default parameters, extended parameter
function add(num1, num2, ...a) {
    console.log(num1 + num2);
    console.log(`extended parameter : a.length`);
}
add(2, 3, "false", 90, "jfghj");

//default paramater

function default_parameter(num1, num2, num3 = 5, num4 = 7) {
    return num1 + num2 + num3 + num4;
}
console.log(`default parameters ${default_parameter(2, 3)}`);

console.log(`extended parameter passing as an argument`);
function extend_parameter(num1, num2, ...a) {
    console.log(a.length);
    console.log(a);
}
extend_parameter(2, 1, ...array)
// extend_parameter(2,1,array);

//extended array using spread operator
let array1 = [10, 20, 30, ...array];
console.log(`extended array ${array1}`);

var string = "javascript";
console.log(...string);
//    console.log(...array1);


// //template literal
console.log(`Template Literal : Array elements: ${array}`);
var num1 = num2 = 10;
// console.log(`addition: ${10+20}`);
console.log(`addition: ${num1 + num2}`);

var string = '\n';
// var string='\\n';
console.log(`new line-escaping sequence:${string} ${string === '\n' ? '' : 'Not'} printed in new line`);

// binary and octal rep
var binary = 0b1101;
var octal = 0o47;
console.log(`binary to decimal: ${binary},octal to decimal: ${octal}`);

var array;
array = [10, 20];
var [a, b] = array;
[a, b] = [b, a];
console.log(a, b);


array = [10, 20, 30]
var [a, , b] = array;
[a, b] = [b, a];
console.log(a);

//enhanced object 
let ename = "janu", edept = "eee";
let object = { ename, edept };
console.log(`enhanced object: ${object.ename}`);

//destructing object matching
var object2 = { name: "janu", age: 20, dept: "eee" };
function student_details({ name, age, dept }) {
    console.log(`student name: ${name}\n student age: ${age}\n student department: ${dept}`);
}
student_details(object2);
// //destructing object matching deep learn
var object3 = { name: { first_name: "janu", middle_name: "shree", last_name: "durai" } };

function printname({ name: { first_name } }) {
    console.log(`first name: ${first_name}`);
}
printname(object3);

//destructuring 
var { name, age, dept } = object2;
console.log(`${name}, ${age}, ${dept}`);

function obj_return(object4) {
    return object4;
}
var { name, age, dept } = obj_return(object2);
console.log(`Object properties: ${name}, ${age}, ${dept}`);

function deep_struct(object4) {
    return object4;
}

var { name: { first_name: f, middle_name: m, last_name: l } } = deep_struct(object3);
console.log(`deep structuring:  ${m}`);

//default parameter in destructuring obj & array
var defaultprop_obj = { a: 10 };
var { a: c, b = 20 } = defaultprop_obj;
console.log(`default properties: ${b}`);


function passing_parameter1({ name, age }) {
    console.log(name, age);
}
function passing_parameter2({ name: n, age: a }) {
    console.log(n, a);
}
function passing_parameter3([name, age]) {
    console.log(name, age);
}

passing_parameter1({ name: "janu", age: 20 });
passing_parameter2({ name: "janu", age: 20 });
passing_parameter3(["janu", 20]);

// //fail soft destruction
var list = [7, 42]
var [a = 1, b = 2, c = 3, d] = list;
console.log(a === 1);
console.log(a === 7);
console.log(c === 3);
console.log(d === undefined);
console.log(b === 2);

// //class
class animals {
    constructor(name) {
        this.name = name;
    }
    disp() {
        console.log(this.name);
    }
}
var animal_obj = new animals("dog");
animal_obj.disp();

// //inheritance
class animalsound extends animals {
    constructor(name, sound, food) {
        super(name);
        this.sound = sound;
        this.food = food;
    }
    disp() {
        console.log(`name:${this.name},sound: ${this.sound},food: ${this.food}`);
    }
    static static_fun() {
        console.log("static function");
    }
}
var animalsound_obj = new animalsound("cat", "bow-bow", "milk");
animalsound_obj.disp();

// static function 
animalsound.static_fun();

// getter and setter
var object4 = {
    set current(name) {
        this.array2.push(name);
    }, 
    array2: [],
    get printarray() {
        return this.array2;
    }
}

object4.current = "janu";
object4.current = "shree";
object4.current = "durai";
console.log(object4.printarray);

var source1 = { name: "janu", age: 20, dept: "eee" };
var source2 = { phno: 123456, email: "janushreedurai@gmail.com" };
var target = { name: "shree", marks: 500, Result: "pass" };
Object.assign(target, source1);
console.log({ target });
Object.assign(target, source1, source2);
console.log(target);

// //iterators
var string = "janu";
for (iterator = 0; iterator < string.length; iterator++) {
    console.log(string[iterator]);
}
console.log("string functions")
console.log([1, 3, 4, 2].find(x => x > 3));
console.log([1, 3, 4, 2].findIndex(x => x > 3));
console.log(string.repeat(3));
console.log(string.startsWith("ja"));
console.log("hello".endsWith("lo"));
console.log("hello".includes("ll"));

console.log("number functions")
console.log(Number.isNaN(42));
console.log(Number.isNaN(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(123));
console.log(Number.isSafeInteger(124));
console.log(Math.trunc(43.90));
console.log(Math.sign(-3214) + " " + Math.sign(144));


// console.log(`var name as function`);
let callbacks = []
// console.log(typeof callbacks);
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { //console.log(i*2)
        return i * 2
    }
}
console.log(typeof callbacks);
console.log(callbacks[0]() === 0);
callbacks[1]() === 2
callbacks[2]() === 4



let obj = {
    k1: "v1",
    k2: "v2"
}
// function prop_add(obj){
//     obj.k3="v3";
//     return obj;
// }
// console.log(prop_add(obj));

obj = { ...obj, k3: "v3" };
console.log(obj);



// obj.k3=v3;

const name1 = {
    first: "Janu",
    last: "Nagarajan",
}

greet(name1);

function greet({ first, last }) {
    console.log(first, last)
}

const data = {
    name_1: "xxx",
    age_1: 23,
    dept_1: "EEE",
    sub: "power electronics"
}

// let name_1_obj ={};

// Object.assign()

const { name_1, age_1, sub, ...otherData } = data;
console.log(name_1, age_1, otherData, sub);

const promise = fetch("https://run.mocky.io/v3/43e28857-1b86-42e0-96d5-b6dac4409ffc")
promise.then((response) => {
    console.log(response.json());
    return response.json();
})