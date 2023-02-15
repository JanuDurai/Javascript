var array=[10,20,30,40,50];
console.log(array[2]+2)
lengthof_array=array.length;
console.log("length of array: "+lengthof_array)

console.log(array);
console.log(array.join('-'))
console.log("sliced element from 2nd index: "+array.slice(2));
console.log("sliced element from 2nd to 4th index: "+array.slice(2,4));
console.log("index of array element: " + array.indexOf(40));

var length_array=array.push(60,70);
console.log(array)
array.splice(6)
array.splice(5,1,80)

array.splice(4,2,80,90,100);
console.log(array)
var doubled_array=array.map((item)=>item*2)
console.log(""doubled_array)