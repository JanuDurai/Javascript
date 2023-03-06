class animals{
    constructor(name){
        this.name=name;
    }
    disp_names(){
        console.log(`Animal name is: ${this.name}`);
    };
}
var obj1=new animals("Cat");
obj1.disp_names();
/*Private property*/ 

class sound extends animals{
    #food;
    constructor(name,sound,food)
    {
        super(name);
        this.sound=sound;
        this.#food=food;
    }
    disp(){
        console.log(`Animal name: ${this.name}, Animal sound: ${this.sound}, Animal food: ${this.#food}`)
    }
}
var obj2=new sound("cat","meow","milk");
obj2.disp()
//console.log(obj2.#food);
// private function
class class_name{
     public_func(){
        this.#private_func();
    }
    #private_func(){
        console.log("private function called from public function")
    }
}
var obj3=new class_name;
obj3.public_func();
//obj3.#private_func();

