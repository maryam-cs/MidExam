var color=["red", "orange", "yellow", "green", "lightblue", "blue", "white", "gray", "pink"];
var num =[1,2,3,4,5,6,7,8,9];
function randomColor(){
  document.querySelector(".one").classList.remove(color[0]);
  document.querySelector(".two").classList.remove(color[1]);
  document.querySelector(".thre").classList.remove(color[2]);
  document.querySelector(".four").classList.remove(color[3]);
  document.querySelector(".five").classList.remove(color[4]);
  document.querySelector(".six").classList.remove(color[5]);
  document.querySelector(".nine").classList.remove(color[6]);
  document.querySelector(".seven").classList.remove(color[7]);
  document.querySelector(".eight").classList.remove(color[8]);
shuffle(color);
console.log(color);
document.querySelector(".one").classList.add(color[0]);
document.querySelector(".two").classList.add(color[1]);
document.querySelector(".thre").classList.add(color[2]);
document.querySelector(".four").classList.add(color[3]);
document.querySelector(".five").classList.add(color[4]);
document.querySelector(".six").classList.add(color[5]);
document.querySelector(".nine").classList.add(color[6]);
document.querySelector(".seven").classList.add(color[7]);
document.querySelector(".eight").classList.add(color[8]);
shuffle(num);
document.querySelectorAll("h5")[0].innerText=num[0];
document.querySelectorAll("h5")[1].innerText=num[1];
document.querySelectorAll("h5")[2].innerText=num[2];
document.querySelectorAll("h5")[3].innerText=num[3];
document.querySelectorAll("h5")[4].innerText=num[4];
document.querySelectorAll("h5")[5].innerText=num[5];
document.querySelectorAll("h5")[6].innerText=num[6];
document.querySelectorAll("h5")[7].innerText=num[7];
document.querySelectorAll("h5")[8].innerText=num[8];}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

}
