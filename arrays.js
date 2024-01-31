 let array=[];
 array.length=20;
 array[15] = 100;
 console.log(array);

 array.length=10;
 array[5]=100;
 console.log(array);

 let arrayConstructor = new Array(10);
 console.log(`type of Array: ${typeof array} , type of array constructor: ${typeof arrayConstructor} `)
 arrayConstructor= Array(10,20,30,40);
 console.log(arrayConstructor);

 array=[91,34,56,34,56,23,19,37];
 console.log(`Char at index  2: ${array.at(2)}`);
 console.log(`Char at index -2: ${array.at(-2)}`);
// console.log(array[-1]);  undefined

console.log(`Replaced an element in array: ${array.with(2,76)}`); 

let secondArray=[100,200,300];
    let concatArray=array.concat(secondArray);
    console.log(`Concating two arrays: ${concatArray}`);   
    console.log([1,2,3].concat(4,5,6,7,8));
    console.log([array[0]].concat(array[3],array[6]));

console.log(`Copying set of elements in array: ${array.copyWithin(-4,-3,-1)}`);

console.log(`Copying set of elements in array: ${array.copyWithin(2,3)}`);

let arrayIterator = array.entries();
// console.log(arrayIterator.next().value);
// console.log(arrayIterator.next().value);

for(const [element,index] of arrayIterator)
  console.log(element,index);

console.log(`every element in array > 20: ${array.every((element)=> element>20)}`);

//array is a subset of another array

secondArray=[23,19,8];
           console.log(secondArray.every((element)=>
                           array.includes(element)));

 
//  const fruits=new Array(4); 

// fruits[0]="guava"; fruits[1]="apple"; 

// console.log(fruits) 

// //Array.from() 

// console.log(Array.from([1,2,3,4])); 

// console.log(Array.from("janu")); 

// console.log(Array.from([1,2,3,4], x=>x*2)); 

// //Array.isArray() 

// console.log(Array.isArray([10,20])); 

// //Array.of 

// console.log(Array.of('janu','EEE','4')); 

// //Array.at 

// console.log(fruits.at(1)); 

// //Array1.concat(array2) 

// console.log(fruits.concat(array2)); 

// //copyWithin 

// console.log(array2.copyWithin(1)); 

// console.log(array2.copyWithin(0,1,2)); 

// //entries 

// var iterator=array2.entries(); 

// console.log(iterator.next().value); 

// console.log(iterator.next().value); 

// //every 

// var every=(element)=>element>20; 

// console.log(array2.every(every)); 

// //array.fill() 

// console.log(array2.fill(30,2,4)); 

// //filter 

// console.log(fruits.filter(word => word.length >6)); 

// //find 

// console.log(fruits.find(word => word.length >6)); 

// //findindex 

// console.log(array2.findIndex(element=> element%2==0)); 

// //findlast 

// console.log(array2.findLast(element=> element%2==0)); 

// //findLastIndex 

// console.log(array2.findLastIndex(element=> element%2==0)); 

// //flat 

// var array2=[10,20,[30,40],[50,60,70]]; 

// console.log(array2.flat()); 

// //flatMap 

// console.log(array3.flatMap(num=>num/2)); 

// //foreach 

// console.log(array2.forEach(element=> console.log(element))); 

// //includes 

// console.log(array.includes(40)) 

// //indexof 

// console.log(array.indexOf(40)); 

// //join 

// console.log(fruits.join('-')); 

// //keys 

// for(const key of array.keys()) 

//  console.log(key) 

// //lastIndexOf 

//  console.log(fruits.lastIndexOf("guava")); 

//  //map 

//  console.log(array.map(x=>(x/2))); 

// //pop 

// array.pop(); 

// //push 

// array.push(40); 

// //reduce 

// console.log(array.reduce((accu,curr)=> accu+curr,0)); 

 

// //reverse 

// console.log(array.reverse()); 

// //shift 

// console.log(array.shift()); 

// //slice 

// console.log(array.slice(2)); 

// //some 

// console.log(array.some((element)=>element%50)); 

// //sort 

// console.log(array.sort()); 

// //splice 

// console.log(array.splice(1,0,60)); 

 

// //tostring 

// console.log(array.toString()); 

// //unshift 

// console.log(array.unshift(4,5)); 

 

// //values() 

// const iter=array.values() 

 

// for(const i of iter) 

//     console.log(i);