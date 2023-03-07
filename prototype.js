var obj={name:"janu",age:23,
     disp: function(){
      console.log(`hii ${obj.name}`);
     }}
    // obj.disp();
     console.log(Object.getPrototypeOf(obj));
   
     //prototypes
     function prototype_of(){
         this.name="janu";
     }
     var object1=new prototype_of();
     var object2=object1;
     do{
      object2=Object.getPrototypeOf(object2);
      console.log(object2);
     } while(object2);
    prototype_of.prototype.dept="eee";
   console.log(object1.dept);

//shadowing prototype
     var date=new Date();
     date.getDate=function(){
      console.log("Shadow prototype");
     }
        date.getDate();  
      
  //creating prototype
  var object3=Object.create(obj);
  object3.disp();

  function create_prototype(name){
   this.name=name;
  }

  var prototype=new create_prototype("janu");
  Object.assign(create_prototype.prototype,obj);
   prototype.disp();  

var object4=new create_prototype("janu");
object4.disp();
//console.log(Object.hasOwn(obj,"name"));
//console.log(Object.hasOwn(obj,"dept"));