//Array methods
//reduce with initial value - sum
let array = [1, 2, 3, 4, 5];
function array_sum(array) {
   let sumArray = array.reduce((accumualtor, currentvalue) =>
      accumualtor + currentvalue, 5
   )
   return sumArray
}
console.log(`Reduce func sum with initial value: ${array_sum(array)}`);
//changed current value inside callback
function Sum_Array(array) {
   let sumArray = array.reduce((accumualtor, currentvalue) => {
      currentvalue = 1;
      return accumualtor + currentvalue
   },
   )
   return sumArray;
}
console.log(`Reduce func sum with currentvalue change ${Sum_Array(array)}`);

//for each
sumArray = 0;
array.forEach((element) => sumArray += element);
console.log(`For each function: ${sumArray}`)

//filter- odd numbers
function odd_elements(array) {
   let odd_array = array.filter((element) =>
      element % 2 == 1
   )
   return odd_array;
}
console.log(`Odd elements in array: ${odd_elements(array)}`);

//reverse a array -original array
function reverse_array(array) {
   let reversearray = array.reverse();
   console.log(`reversed in original array: ${array}`);

   array = [1, 2, 3, 4, 5];
   //new array - reverse
   reverse_array = array.toReversed();
   console.log(`reversed in new array: ${reversearray}`);
   console.log(`reversed in new array. The original array: ${array}`);
}
reverse_array(array);
//find max
function max_ele(array) {
   let max;
   max = array.reduce((a, b) =>
      Math.max(a, b)
   );
   console.log(`Max number in array: ${max}`);
}
max_ele(array);

//Remove duplicates
array = [1, 2, 3, 5, 2, 2, 5, 7]
function remove_duplicate(array) {
   let nonduplicate_array = [];
   array.forEach((element) => {
      if (array.indexOf(element) === array.lastIndexOf(element))
         nonduplicate_array.push(element);
   })
   console.log(`non duplicate array: ${nonduplicate_array}`);
}
remove_duplicate(array);

//string manupulation - reverse
let string = "janushree";
function string_reverse(string) {
   let split_str = string.split("");
   split_str = split_str.reverse();
   let join_str = split_str.join("");
   console.log(`reverse str of ${string} is ${join_str}`);
}
string_reverse(string);

let rev_str = "";
for (let i = string.length - 1; i >= 0; i--) {
   rev_str += string[i];
}
console.log(rev_str);

//palindrome
string = "malayalamkl";
function palindrome_str(string) {
   let iterator;
   let lastindex;
   for (iterator = 0, lastindex = string.length - 1; iterator < Math.floor(string.length / 2); iterator++, lastindex--) {
      if (string[iterator] != string[lastindex]) {
         break;
      }
   }
   if (iterator == Math.floor((string.length / 2)))
      console.log(`${string} is palindrome`);
   else
      console.log(`${string} is not palindrome`);
}

palindrome_str(string);

// m a l a y a l a m    0,8   1,7  2,6  3,5   4,4
// 0 1 2 3 4 5 6 7 8

//   a b c c b a      0,5   1,4   2,3    3,2
//   0 1 2 3 4 5

//count vowels in string

string = "Janushree";
function count_vowel(string) {
   let vowel_count = 0;
   let characters = string.split("");
   characters.forEach((element) => {
      if (element == 'a' || element == "e" || element == 'i' || element == 'o' || element == 'u')
         ++vowel_count;
   })
   return vowel_count;
}
let vowel_count = count_vowel(string);
console.log(`Vowel count of string ${string} is ${vowel_count}`);

//string concatenation
string1 = "Hiii! "
console.log(`string concatenation: ${string1.concat(string)}`);

//capitalise the word
function capitalise_str(string) {
   string = string.split("");
   string[0] = string[0].toUpperCase()
   //   string=string.split("");
   for (let iterator = 0; iterator < string.length; iterator++) {
      if (string[iterator] == " ")
         string[iterator + 1] = string[iterator + 1].toUpperCase();
   }
   string = string.join("");
   console.log(string);
}
string = "captilise the word in js";
capitalise_str(string);

const str = "captilise the word in js";
const ar = str.split(" ");
const res = ar.reduce((acc, ele, i) => {
   acc = `${acc}${ele[0].toUpperCase()}${ele.substring(1)}`;
   return i === ar.length - 1 ? acc : `${acc} `
}, '')
console.log('result!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', res);


// sort array odd-as even-des

// array=[3,6,9,10,12,5,15,18];
array = [1, 2, 3, 4, 5];

console.log(array.sort((a,b)=> a-b));

// 1 2 3 4 5
// 1 5 2 3 4
// 1 5 2 4 3


let arr_len=array.length-1
   // console.log(array);
   function arrange_array(array){
   for (let iterator = 1; iterator < arr_len; iterator++) {
      if (iterator % 2 == 1) {
         temp = array[arr_len];
         array.copyWithin(iterator+1,iterator);
         array[iterator] = temp;
      }
   }
   console.log(array);

   }
arrange_array(array);

console.log(Math.ceil(4.02));


string=string.split(" ");
console.log(string.at(-1));

console.log("janu".concat(" ","shree"));


let array_objects=[{aname:"j" ,adept:"eee"},{aname:"a",adept:"ece"},{aname:"n",adept:"ei"}];

array_objects.map((element)=>{
       console.log(element.aname,element.adept);
})

let filter_array=[];
array_objects.filter((element)=>{
               filter_array.push(element.aname);
});
console.log(filter_array)


array=[19,23,34,45];
let sum=0;
array.map((element)=>{
   sum+=element;
})

let avg= sum/array.length;
console.log(`average: ${avg}`);

avg=array.reduce((acc,curr)=>{
      acc=acc+curr;
      if(array.indexOf(curr)==array.length-1)
          return acc/array.length;
         return acc;
},0)

console.log(`avg using reduce func: ${avg}`);
string="I think Ruth's dog is cuter than your dog!"
string = string.replaceAll(" ","");
console.log(`space removed: ${string}`);

let string12="how";
let string21="who";

console.log(string12.split("").sort().join(""));
string12=string12.split("").sort().join("");
string21=string21.split("").sort().join("");

if(string12==string21)
  console.log(`Anagram`);
else
  console.log(`not a anagram`);


  if(""===0)
  console.log(`"" and 0 are equal`);
else
 console.log(`Not equal`);

 let x=5;
 if(1<x<6){
   console.log(`true`);
 }

const Rectangle ={width:500, height:500};
const area = Rectangle.width * Rectangle.heigth;
console.log(area);

console.log(4/[]);