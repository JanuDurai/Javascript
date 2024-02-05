var string='Hello ';
console.log(string);

var string2='I\'m janu';
console.log(string2);

var joinstring=`${string}janu`;
console.log(joinstring);

console.log(string + string2)
var num=123;
console.log(string+num)
console.log(typeof(num.toString()));
console.log("string length " + string.length);
console.log("char from string "+ string[0]);

if(string.includes("loy"))
 console.log("sub string present inside "+ string)
 else
 console.log("sub string not present inside "+ string)
var char='Hel'
 if(string.startsWith(char))
 console.log("string start with " +char)
 else
 console.log("string not start with " +char)

 if(string.endsWith('llo '))
 console.log("string end ")
 else
 console.log("string not end ")

 stringindex="JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
 console.log("index of first poccur"+ stringindex.indexOf("often",2))
 var firoccur=stringindex.indexOf("is");
console.log("index of 2nd ocuur"+ stringindex.indexOf("is",firoccur));

console.log("Extract sub string: "+ stringindex.slice(2))
console.log("str to lowercase: " + string.toLowerCase());
console.log("str to uppercase : " + string.toUpperCase());

var actualstr="vannila";
var update=actualstr.replace("vann","moz")
console.log("actualstr: "+actualstr + " updatedstr: "+update)
      // actualstr=actualstr.replace("vann","moz")
      // console.log("To change the actual str: "+actualstr);

    
var stringinde="apple";
var index=stringinde.indexOf('p')
console.log(stringinde.indexOf('p',index+1))





// let arrow_function = ()=>{
//     console.log("arrow function");
// }

// let arrow_function = 10; 

var arr = [11,20,30];
var sum=0;
for(const i of arr){
    sum+=i;
}

arr.reduce((accumulator,ele,i)=>{
      
    return accumulator
},[])

var odd_num=arr.filter((x)=>{
    return x%2==1
})

console.log(odd_num);

let string1 ="this is string1";
let string2 = "This is string2";
    console.log(string1.concat(string2));

    let palinstring="malayalam";
    console.log(palinstring[0]);
   let palin_length=palinstring.length/2;

    let length=palinstring.length -1;
    for(const i of palinstring){
       if(palinstring[i]===palinstring[length]&&i<palin_length)
       --length;
       else
          return false;
    }
    

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
