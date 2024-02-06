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

(function (num1, num2, num3) {
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
for ( let i = 0; i < 3; i++) {
    const log = () => { 
        console.log(i); }; 
    setTimeout(log, 100);
}


//setter getter

let propertyNameExpression = "deletegetproperty";

let setgetObject = {
    value1: [20, 85, 35, 56, 21, 88],
    value2: "janu",
    filterarray: [],
    set valueDisplay(value1) {
        this.filterarray = this.value1.filter((ele) => ele % 2 == 0);
    },
    get valueDisplay() {
        return this.filterarray;
    },
    sumOfEvenArray: [],

    get [propertyNameExpression]() {
        return "deleted a get property";
    }
};

setgetObject.valueDisplay = setgetObject.value1;
console.log(setgetObject.valueDisplay);

Object.defineProperty(setgetObject, "setEvenSum", {
    set(filterarray) {
        this.sumOfEvenArray = filterarray.reduce((acc, cur) => acc = acc + cur, 0)
    },
});

Object.defineProperty(setgetObject, "getEvenSum", {
    get() {
        return this.sumOfEvenArray;
    }
})

setgetObject.setEvenSum = setgetObject.filterarray;

console.log(setgetObject.getEvenSum);

console.log(setgetObject[propertyNameExpression]);

// console.log(setgetObject.deletegetproperty);

// delete setgetObject.deletegetproperty;

delete setgetObject[propertyNameExpression];


//static get set

class staticPropertyFunction {
    static staticVariable1 = 10;
    get nonstaticGetProperty() {
        console.log(staticPropertyFunction.staticGetProperty);
        return "nonstatic property"
    }
    static get staticGetProperty() {
        this.anotherStaticFunction();
        return "static property"
    }

    static anotherStaticFunction() {
        console.log("accessing static func in another static function");
        return "string";
    }

    constructor(name, age, dept) {
        this.name = name;
        this.age = age;
        this.dept = dept;
        staticPropertyFunction.staticVariable1 = "staic property value chnaged im construtor"
        this.result = staticPropertyFunction.staticGetProperty;
    }
}


// console.log(staticPropertyFunction.staticGetProperty);
staticPropertyFunction.staticGetProperty = "static property value updated";
console.log(staticPropertyFunction.staticGetProperty);



// var staticFuncObj=new staticPropertyFunction();
// console.log( staticFuncObj.nonstaticGetProperty);

// staticFuncObj.nonstaticGetProperty="non static property value updated";
// console.log( staticFuncObj.nonstaticGetProperty);

// console.log(staticFuncObj = new staticPropertyFunction("janu", 23, "eee"));
// console.log(staticPropertyFunction.staticVariable1);

// staticPropertyFunction.staticGetProperty = "static property value updated";

// staticPropertyFunction.staticVariable1 = "static value updated";
// console.log("...................", staticPropertyFunction.staticVariable1);


// // static property
// staticPropertyFunction.staticVariable1="static property value changed"

// console.log(staticPropertyFunction.staticVariable1);



class parentClass {
    static staticprop = "static property value";
    static #privatestaticproperty = "private static value";
    static staticFunction() {
        return "static function return";
    }
    constructor(){
        console.log("static property value...........", this.constructor.staticprop)
    }
    nonstaticproperty = "non-static property";
    nonstaticFunction() {
        this.nonstaticproperty = "non static property value updated";
        return "non-static function";

    }

    static #staticprivatefunction() {
        console.log(parentClass.#privatestaticproperty);
    }

    staticprivatefunctioncall() {
        parentClass.#staticprivatefunction();
    }
    

}

// class childClass extends parentClass {

//     constructor() {
//         parentClass.staticprop = "static property changed in child classsssss";
//         this.parentStaticFuncValue = parentClass.staticFunction();
//     }
//     printparentstaticproperty() {
        // console.log(parentClass.#privatestaticproperty);
//     }
// }

// console.log(parentClass.staticprop);

// let childClassObject = new childClass;
// console.log(parentClass.staticprop);

// console.log(childClassObject.nonstaticFunction);

let parentClassObject=new parentClass();
// parentClassObject.staticprivatefunctioncall()


