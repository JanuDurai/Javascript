console.log(document.body.id); 
var new_body=document.createElement("body");  
new_body.id='new_body';   

document.body=new_body;   
console.log(document.body.id);

console.log(document.childElementCount);
console.log(document.children);
console.log(document.firstElementChild);
console.log(document.lastElementChild);

var document1=new Document();
var html=document.createElement("html");
document1.append("html");
document1.children;
