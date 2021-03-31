var wAudio = new Audio("sounds/tom-1.mp3");
var aAudio = new Audio("sounds/tom-2.mp3");
var sAudio = new Audio("sounds/tom-3.mp3");
var dAudio = new Audio("sounds/tom-4.mp3");
var jAudio = new Audio("sounds/snare.mp3");
var kAudio = new Audio("sounds/crash.mp3");
var lAudio = new Audio("sounds/kick-bass.mp3");
function wPressed()
{
  wAudio.pause();
  wAudio.currentTime = 0;
  wAudio.play();
}
function aPressed()
{
  aAudio.pause();
  aAudio.currentTime = 0;
  aAudio.play();
}
function sPressed()
{
  sAudio.pause();
  sAudio.currentTime = 0;
  sAudio.play();
}
function dPressed()
{
  dAudio.pause();
  dAudio.currentTime = 0;
  dAudio.play();
}
function jPressed()
{
  jAudio.pause();
  jAudio.currentTime = 0;
  jAudio.play();
}
function kPressed()
{
  kAudio.pause();
  kAudio.currentTime = 0;
  kAudio.play();
}
function lPressed()
{
  lAudio.pause();
  lAudio.currentTime = 0;
  lAudio.play();
}
document.addEventListener('keypress',function(event){
  var c = 'o';
  if(event.keyCode == 119)
  {
    wPressed();
    c = 'w';
  }
  else if(event.keyCode == 97)
  {
    aPressed();
    c = 'a';
  }
  else if(event.keyCode == 115)
  {
    sPressed();
    c = 's';
  }
  else if(event.keyCode == 100)
  {
    dPressed();
    c = 'd';
  }
  else if(event.keyCode == 106)
  {
    jPressed();
    c = 'j';
  }
  else if(event.keyCode == 107)
  {
    kPressed();
    c = 'k';
  }
  else if(event.keyCode == 108)
  {
    lPressed();
    c = 'l';
  }
  enlarge(c);
})

function enlarge(c)
{
  document.querySelector("."+c).classList.toggle("enlarge");
  setTimeout(function () {
    document.querySelector("."+c).classList.toggle("enlarge")
  }, 200);
}
