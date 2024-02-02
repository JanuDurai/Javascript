// // // object creation
var object = {
  name: ["janu", "boos", "boomi", "pradhi"],
  age: 7,
  1: "std",
  "grade": "A",
  printfunc() {
    console.log(`Hi ${this.name[0]}.Your age is ${object.age}`)
  },
  greetfunc(index) {
    console.log(`Welcome ${object.name[index]}. Your age is ${object["age"]}`)
  }
}
object.printfunc();
console.log(`object.name:${object.name}`);
object.age = 5;
object.greetfunc(3);
object["1"] = "standard";
console.log(object);

let displayProperties = function () {
  console.log(`this..........: `, this.name, this.age);
}
object.disp = displayProperties;
object.disp();


// var object_prop={name:{first_name:"janu",
//                  middle_name:"shree",last_name:"durai"},
//                  age:35,
//                  printfunc(){
//                     console.log(`Hii ${object_prop.name.first_name}`)
//                  }
//         }
//      object_prop.printfunc();
//      console.log(`name: ${object_prop["name"].first_name} ${object_prop["name"]["middle_name"]} ${object_prop.name.last_name}`);
//      object_prop.name.first_name="Janu";
//      object_prop.name["middle_name"]="Shree";
//      object_prop["name"]["last_name"]="Durai";
//      console.log(object_prop.name);
//      object_prop["dept"]="EEE";
//      console.log(object_prop.dept);
//      
//  object_prop.ageprint=function(){
//         console.log("Creating function outside object");
//      }
//      object_prop.ageprint();
//        var key="year";
//        var value="4";
//         object_prop[key]=value;
//        console.log(`Creating members outside obj, Member value is ${object_prop.year}`);

// //object creation in function
//        function without_obj(name){
//          var obj={};
//          obj.name=name;
//            obj.disp=function(){
//              console.log(`function: `, obj.name);
//          }
//          return obj;
//      }
//          var obj1=without_obj("janu");
//          console.log(obj1.name);
//          obj1.disp();

//      function create_object(name){
//         this.name=name;
//         this.disp= function(){
//             console.log(this.name);
//         };

//        }
//      var obj2=new create_object("shree");
//     obj2.disp();

function vegetable(name, color, weight) {
  this.name = name;
  this.color = color;
  this.weight = weight;
}

function basket(name, color, weight, vegetable) {
  this.name = name;
  this.color = color;
  this.weight = weight;
  this.vegetable = vegetable;
}

let vege = new vegetable("carrot", "orange", "2kg")
vege.price = 250;
let fruit = new basket("orange", 'orange', "1kg", vege);
// console.log(fruit);

basket.prototype.bill = 1000;
let apple = new basket("apple", 'red', "3kg", vege);
console.log(`bill prototype \n`, fruit, apple);

console.log("prototype of apple: \n", Object.getPrototypeOf(apple));
// apple.bill=2000;
console.log("prototype of fruit: \n", Object.getPrototypeOf(fruit));
basket.prototype.disp = function () {
  console.log(`prototype function: `, this.bill);
}
fruit.disp();
// delete fruit.name;
// console.log(fruit);

// fruit.price=450;
// delete fruit.price;
// console.log(fruit);

// let deleteProperty={
//   name:{
//     firstname: "janu",
//     lastname:"shree"
//   },
//       std:10
// }
//  delete deleteProperty.std;
//  console.log(deleteProperty);

//  delete deleteProperty.name.firstname;
//  console.log(deleteProperty);

//object create function

let Animal = {
  name: "cat",
  color: "black",

  sound() {
    console.log(`meow`);
  }
}
let cat = Object.create(Animal);
// cat.food="fish";
// console.log(cat.name);
cat.sound();

function displayProp() {
  console.log(`this..........: `, this.name, this.color);
}
cat.disp = displayProp;
cat.disp();

//getter,setter


let getSetObject = {
  num1: 10,
  get num2() {
    return this.num1;
  },
  set num3(num4) {
    this.num1 = this.num1 + num4;
  }
}

console.log(getSetObject.num1);
console.log(getSetObject.num2);
getSetObject.num3 = 20;
// getSetObject.num3(20);
console.log(getSetObject.num1);

//object define property
Object.defineProperties(getSetObject, {
  setproperty1: {
    value: 43,
    writable: true,
  },
  setproperty2: {
    value: 50,
    writable: false,
  }
});


console.log(getSetObject.setproperty1);
getSetObject.setproperty1 = 100;
console.log(getSetObject.setproperty1);
getSetObject.setproperty2 = 100;
console.log(getSetObject.setproperty2);

let objreference = getSetObject;
if (getSetObject == objreference)
  console.log("objref and getsetobj are same");

getSetObject.num1 = 50;
console.log(objreference.num1);

if (fruit === apple)
  console.log("fruit and apple are same obj");
else
  console.log("fruit and apple are diff obj");



