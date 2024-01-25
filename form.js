let form = document.querySelector("form");
let para=document.getElementById("console");
let gender;
  if(document.getElementById("r1").checked)   
     gender=document.getElementById("r1").value;
  if(document.getElementById("r2").checked)
     gender=document.getElementById("r2").value;
  if(document.getElementById("r3").checked)
     gender=document.getElementById("r3").value;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    var data=new FormData(e.target);
  //   let firstname=data.get("firstname");
  //  if(firstname === "janu")
  //         console.log("name valid");
        let objectentries = Object.fromEntries(data.entries());
        alert("Form Submitted successfully");
      para.innerHTML = ` First Name: ${objectentries.firstname}`  +"<br>"+ 
                         `Last Name : ${objectentries.lastname}` + "<br>"   +
                         `Gender: ${gender}` +"<br>" +
                         `E-mail: ${objectentries.email}`;
        // console.log(objectentries);
        // console.table(objectentries);
  para.style.alignItems="center";
  para.style.color="red";
})





