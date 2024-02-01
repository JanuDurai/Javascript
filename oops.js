class animals {
    constructor(name) {
        this.name = name;
    }
    disp_names() {
        console.log(`Animal name is: ${this.name}`);
    };
}
var obj1 = new animals("Cat");
obj1.disp_names();

/*Private property*/
class sound extends animals {
    #food;
    constructor(name, sound, food) {
        super(name);
        this.sound = sound;
        this.#food = food;
    }
    disp() {
        console.log(`Animal name: ${this.name}, Animal sound: ${this.sound}, Animal food: ${this.#food}`)
    }
}
var obj2 = new sound("cat", "meow", "milk");
obj2.disp()
// console.log(obj2.#food);

// private function
class class_name {
    public_func() {
        this.#private_func();
    }
    #private_func() {
        console.log("private function called from public function")
    }
}
var obj3 = new class_name;
obj3.public_func();
//obj3.#private_func();

//Anonymous class

let anonymousClassVariable = class {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    valueDisplay = () => {
        console.log(`value of anonymous function`, this.number1, this.number2);
    }

}
let anonymousClassObject = new anonymousClassVariable(10, 20);
anonymousClassObject.valueDisplay();

//create object in class declaration

let immediateObj = new class {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    displayNumbers() {
        console.log(`Immediate obj creation in class `, this.number1, this.number2);
    }
}(50, 60);

immediateObj.displayNumbers();

let classVariable = class Classname {
    disp() {
        console.log("class definition assigned to a variable");
    }
};
let classObject = new classVariable();
classObject.disp();

//immediately invoke function

(function immediateInvokeFunction(num1, num2, num3) {
    console.log(`immediate invoke function:`, num1 + num2 + num3);
})(10, 20, 30);

let num2 = 2;
let immediateInvokeFunctionExp = (function (num, num2) {
    var num1 = num;
    return function () {
        return num1 * num2;
    }
})(10, num2);
num1 = 120;
num2 = 4;
console.log(num1);
console.log(immediateInvokeFunctionExp());


let iife = (function (num1, num2) {
    return {
        add: function () {
            return num1 + num2;
        },
        subtract: function () {
            return num1 - num2;
        },
        multiply: function () {
            return num1 * num2;
        }

    }
})(10, 5);

// console.log(iife.add());
// console.log(iife.subtract());
// console.log(iife.multiply());

// let i;
for (let i = 0; i < 3; i++) {
    const log = () => { 
        console.log(i); }; 
    setTimeout(log, 100);
}



