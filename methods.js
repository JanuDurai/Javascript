//Array methods
//reduce with initial value - sum
    let array=[1,2,3,4,5];
    let sumArray = array.reduce((accumualtor,currentvalue)=>
             accumualtor+currentvalue, 5
     )
     console.log(`Reduce func sum with initial value: ${sumArray}`);
//changed current value inside callback
      sumArray = array.reduce((accumualtor,currentvalue)=>{
             currentvalue=1;
             return accumualtor+currentvalue },
     )
     console.log(`Reduce func sum with currentvalue change ${sumArray}`);

//for each
   sumArray=0;
   array.forEach((element)=>sumArray+=element);
   console.log(`For each function: ${sumArray}`)

//filter- odd numbers
let odd_array = array.filter((element)=>
               element%2==1
)
console.log(`Odd elements in array: ${odd_array}`);

//reverse a array -original array
let reverse_array=array.reverse();
   console.log(`reversed in original array: ${array}`);
   array=[1,2,3,4,5];
   //new array - reverse
   reverse_array=array.toReversed();
   console.log(`reversed in new array: ${reverse_array}`);
   console.log(`reversed in new array. The original array: ${array}`);

//find max
   let max=0;
   max= array.reduce((a,b)=>
        Math.max(a,b)
   );
console.log(`Max number in array: ${max}`);

//Remove duplicates
    array=[1,2,3,5,2,2,5,7]
let nonduplicate_array =[];
array.forEach((element)=>{
   if(array.indexOf(element) ===  array.lastIndexOf(element))
          nonduplicate_array.push(element);
})
console.log(`non duplicate array: ${nonduplicate_array}`);


//string manupulation
let string="janushree";
let split_str=string.split("");
   split_str= split_str.reverse();
let join_str = split_str.join("");
console.log(`reverse str of ${string} is ${join_str}`);

let rev_str="";
for(let i = string.length-1;i>=0;i--){
   rev_str+=string[i];
}
console.log(rev_str);

//palindrome





