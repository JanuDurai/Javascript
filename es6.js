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

//class
class animals{
    constructor(name){
        this.name=name;
    }
    disp(){
        console.log(this.name);
    }
}
var animal_obj=new animals("dog");
animal_obj.disp();
//inheritance
class animalsound extends animals{
    constructor(name,sound,food){
        super(name);
        this.sound=sound;
        this.food=food;
    }
      disp(){
        console.log(`name:${this.name},sound: ${this.sound},food: ${this.food}`);
    }
    static static_fun(){
        console.log("static function");
    }
}
var animalsound_obj=new animalsound("cat","bow-bow","milk");
animalsound_obj.disp();
//static function 
animalsound.static_fun();

//getter and setter
var object4={
    set current(name){
        this.array2.push(name);
    }, array2:[],
    get printarray(){
        return this.array2[this.array2.length-1];
    }
}
object4.current="janu";
object4.current="shree";
object4.current="durai";
console.log(object4.printarray);

var source1={name:"janu",age:20,dept:"eee"};
var source2={phno:123456,email:"janushreedurai@gmail.com"};
var target={name:"janu",marks:500,Result:"pass"};
Object.assign(target,source1);
console.log(target);
Object.assign(target,source1,source2);
console.log(target);

//iterators
var string="janu";
for(iterator=0;iterator<string.length;iterator++){
    console.log(string[iterator]);
}
console.log("string functions")
console.log([ 1, 3, 4, 2 ].find(x => x > 3) );
console.log([ 1, 3, 4, 2 ].findIndex(x => x > 3));
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
console.log(Math.sign(-3214)+" "+ Math.sign(144));
