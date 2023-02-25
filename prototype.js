function date_func(){
     var obj={};
     this.disp=function(){
        console.log("obj created");
     }
     return obj;
}

const obj1 = new date_func();
let object = obj1;
     
// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);

// Date.prototype
// Object { }
// null
