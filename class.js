<<<<<<< HEAD
class animal{
    constructor(name,food){
        this.name=name;
        #food;
        this.food=food;
    }
   disp(){
        console.log(this.name);
    }
}
// var obj1=new animal("cat");
// obj1.disp();
class sound extends animal{
    constructor(name,sound,food)
    {
        super(name,food);
        this.sound=sound;
    }
    disp(){
        console.log(`Animal name: ${this.name}, Animal sound: ${this.sound}`)
    }
}
var obj2=new sound("cat","meow","milk");
obj2.disp();
=======
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
>>>>>>> 837d265f18cbc7a722c887c6ef1800205565dfe0
