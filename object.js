var object={name:["janu","boos","boomi","pradhi"],
             age: 32, 
             printfunc(){
                console.log(`Hi ${this.name[0]}.Your age is ${object.age}`)
             },
             greetfunc(index){
                console.log(`Welcome ${object.name[index]}. Your age is ${object["age"]}`)
             }
            }
             object.printfunc();
             console.log(`object.name:${object.name}`);
              object.age=45;
             object.greetfunc(3);
var object_prop={name:{first_name:"janu",
              middle_name:"shree",last_name:"durai"},age:35,
            printfunc(){
                console.log(`Hii ${object_prop.name.first_name}`)
            }
        }
     object_prop.printfunc();
     console.log(`name: ${object_prop.name["first_name"]} ${object_prop["name"]["middle_name"]} ${object_prop.name.last_name}`);
     object_prop.name.first_name="Janu";
     object_prop.name["middle_name"]="Shree";
     object_prop["name"]["last_name"]="Durai";
    console.log(object_prop.name);
     //console.log(`name: ${object_prop.name["first_name"]} ${object_prop["name"]["middle_name"]} ${object_prop.name.last_name}`);
     object_prop["dept"]="EEE";
     console.log(object_prop.dept);
     object_prop.ageprint=function(){
        console.log("Creating function outside object");
     }
     object_prop.ageprint();
       var key="year";
       var value="4";
        object_prop[key]=value;
       console.log(`Creating members outside obj, Member value is ${object_prop.year}`);

       function without_obj(name){
         var obj={};
         obj.name=name;
           obj.disp=function(){
             console.log(obj.name);
         }
         return obj;
     }
         var obj1=without_obj("janu");
         console.log(obj1.name);
     obj1.disp();

     function create_object(name){
        this.name=name;
        this.disp= function(){
            console.log(this.name);
        };
          
       }
     var obj2=new create_object("shree");
    obj2.disp();


    