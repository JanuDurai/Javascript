var button=document.getElementById("set_alarm");
var para=document.getElementById("content");
button.addEventListener("click",()=>{
  setTimeout(()=>{
   para.innerText = "It's time for wake up";
  },1000)
});

