document.querySelector(".one").addEventListener("mouseover",myFunction);
document.querySelector(".two").addEventListener("mouseover",myFunction);
document.querySelector(".thre").addEventListener("mouseover",myFunction);
document.querySelector(".four").addEventListener("mouseover",myFunction);
document.querySelector(".five").addEventListener("mouseover",myFunction);
document.querySelector(".six").addEventListener("mouseover",myFunction);
document.querySelector(".seven").addEventListener("mouseover",myFunction);
document.querySelector(".eight").addEventListener("mouseover",myFunction);
document.querySelector(".nine").addEventListener("mouseover",myFunction);
document.querySelector(".one").addEventListener("mouseover",alertfun);
document.querySelector(".two").addEventListener("mouseover",alertfun);
document.querySelector(".thre").addEventListener("mouseover",alertfun);
document.querySelector(".four").addEventListener("mouseover",alertfun);
document.querySelector(".five").addEventListener("mouseover",alertfun);
document.querySelector(".six").addEventListener("mouseover",alertfun);
document.querySelector(".seven").addEventListener("mouseover",alertfun);
document.querySelector(".eight").addEventListener("mouseover",alertfun);
document.querySelector(".nine").addEventListener("mouseover",alertfun);
var num=[];
function myFunction(){
  if(this.querySelector("h5").innerText.length!=0){
num.push(this.querySelector("h5").innerText);
this.querySelector("h5").innerText="";
}}
function alertfun(){if(num.length==9)
{alert(num);
num=[];}}
