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