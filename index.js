// Button Detection
var numberOfDrumbButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumbButtons;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var keyPressed=this.innerHTML;
    keyDetect(keyPressed);
    addAnimation(keyPressed);
  });
}
// Keyboard Button Press Detection
document.addEventListener("keypress",function(event){
  var keyPressed=event.key;
  keyDetect(keyPressed);
  addAnimation(keyPressed);
});
// To play the sounds
function keyDetect(keyPressed)
{
  switch (keyPressed)
  {
    case 'w': var audio=new Audio("sounds/tom-1.mp3");
              audio.play();
              break;
    case 'a': var audio=new Audio("sounds/tom-2.mp3");
              audio.play();
              break;
    case 's': var audio=new Audio("sounds/tom-3.mp3");
              audio.play();
              break;
    case 'd': var audio=new Audio("sounds/tom-4.mp3");
              audio.play();
              break;
    case 'j': var audio=new Audio("sounds/snare.mp3");
              audio.play();
              break;
    case 'k': var audio=new Audio("sounds/crash.mp3");
              audio.play();
              break;
    case 'l': var audio=new Audio("sounds/kick-bass.mp3");
              audio.play();
              break;
  }
}
// To add the animation
function addAnimation(keyPressed)
{
  var activeButton=document.querySelector("."+keyPressed);
  activeButton.classList.add("pressed");
  setTimeout(function(){activeButton.classList.remove("pressed");},150);
}
