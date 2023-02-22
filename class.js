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