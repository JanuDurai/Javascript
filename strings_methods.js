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
 console.log("index of first poccur  "+ stringindex.indexOf("often"))
 var firoccur=stringindex.indexOf("is");
console.log("index of 2nd ocuur  "+ stringindex.indexOf("is",firoccur+1));

console.log("Extract sub string: "+ stringindex.slice(2))
console.log("str to lowercase: " + stringindex.toLowerCase());
console.log("str to uppercase : " + stringindex.toUpperCase());

var actualstr="vannila";
var update=actualstr.replace("vann","moz")
console.log("actualstr: "+actualstr + " updatedstr: "+update)
      // actualstr=actualstr.replace("vann","moz")
      // console.log("To change the actual str: "+actualstr);

    
var stringinde="apple";
var index=stringinde.indexOf('p')
console.log(stringinde.indexOf('p',index+1))


let arrow_function = ()=>{
    console.log("arrow function");
}
    arrow_function();

    arrow_function = 10; 
    console.log(arrow_function);


var arr = [11,20,30];
var sum=0;
for(const i of arr){
    sum+=i;
}

console.log(arr.reduce((accumulator,ele,i)=>{
  return accumulator
}));

var odd_num=arr.filter((x)=>{
    return x%2==1
})

console.log(odd_num);

let string1 ="this is string1";
 string2 = "This is string2";
    console.log(string1.concat(" ",string2));

    let palinstring="malayalam";
    if(palinstring===palinstring.split("").reverse().join(""))
      console.log("string is palindrome");
    else
     console.log("string is not palindrome");
    

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

let data = [
    {
      item: 'a',
      price: 100,
    },
    {
      item: 'b',
      price: 50,
    },
    {
      item: 'c',
      price: 500,
    },
    {
      item: 'd',
      price: 300,
    },
    {
      item: 'e',
      price: 70,
    },
  ];

 sum=0;
  data.forEach((element)=>{
        sum+=element.price;
  })
console.log(data.filter((obj)=> obj.price>100).map((ele)=> ele.price ))




console.log(sum/data.length);
sum=data.reduce((acc,curr,i)=>{
         acc+=curr.price;
     return i==data.length-1? acc/data.length: acc;
},0)
console.log(sum);