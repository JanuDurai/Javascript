var obj = {
  name: "janu",
  age: 23,
  disp() {
    console.log(`hii ${this.name}`);
  }
}
obj.disp();
let objreference = Object.create(obj);
console.log("prototype");
do {
  objreference = Object.getPrototypeOf(objreference);
  console.log(objreference);
} while (objreference);


//prototypes
function prototype_of() {
  this.name = "janu";
}

var object1 = new prototype_of();
var object2 = object1;

prototype_of.prototype.dept = "eee";
console.log(object1.dept);

//shadowing prototype
var date = new Date(2024, 2, 2);
date.getDate = function () {
  console.log("Shadow prototype");
}
date.getDate();

//   //creating prototype
var object3 = Object.create(obj);
object3.name = "shreeee"
object3.disp();

function create_prototype(name, dob) {
  this.name = name;
  this.dob = dob;
}

var objprototype = new create_prototype("janushree", "23/10/2001");
Object.assign(create_prototype.prototype, obj);
objprototype.disp();
// console.log(objprototype);

// Object.assign(objprototype, obj);
// objprototype.disp();
// console.log(objprototype);

var object4 = new create_prototype("vasumitha");
// object4.disp();


// console.log(Object.hasOwn(obj,"name"));
// console.log(Object.hasOwn(obj,"dept"));

let objectliteral = {
  name: "shree",
}
console.log(Object.assign(objectliteral, obj));






// function Animals(name,color,food,sound){

//        let animalobject=Object.create(Animals.prototype);
//        animalobject.name=name;
//        animalobject.color=color;
//        animalobject.food=food;
//        animalobject.sound=sound;
//        return animalobject;
// }

// Animals.prototype.eat = function(){
//   console.log(this.name + " eats " + this.food);
// }


// Animals.prototype.sound = function(){
//   console.log(this.name + " sounds " + this.sound);
// }

// let animalobject = Animals("cat","black","fish","meow");


// animalobject.eat();


// function Animals(name, color, food, sound) {
//   this.name = name;
//   this.color = color;
//   this.food = food;
//   this.sound = sound;

//   Animals.prototype.eat = function () {
//     console.log(this.name + " eats " + this.food);
//   }
  
  
//   Animals.prototype.sound = function () {
//     console.log(this.name + " sounds " + this.sound);
//   } 

// }


// let animalobject = new Animals("cat", "black", "fish", "meow");


// animalobject.eat();


function Animals(name, color, food, sound) {
  this.name = name;
  this.color = color;
  this.food = food;
  this.sound = sound;
   this.eat=function (){
    console.log(this.name + " eats " + this.food);
  }
  this.sound=function () {
    console.log(this.name + " sounds " + this.sound);
  } 
}


let animalobject = new Animals("cat", "black", "fish", "meow");


animalobject.eat();











