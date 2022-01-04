var output = document.getElementById("output")
var range_m = document.getElementById("range-m")
var btn_plus = document.getElementById("btn-plus")
var btn_neg = document.getElementById("btn-neg")
var start=document.getElementById("start");

var bpm= range_m.value;

if(bpm < 90){
  range_m.style.backgroundColor = "green"
}


output.innerHTML = range_m.value;
range_m.oninput = function() {
    output.innerHTML = this.value;

}

function plus(){

    range_m.stepUp()
    output.innerHTML = range_m.value;
  }


  function negetive(){

    range_m.stepDown()
    output.innerHTML = range_m.value;
  }

  var audio = new Audio("sound1.wav");
//   myTimer=setInterval(PlaySound,6000/ range_m.value);

//   function PlaySound  () {
//     start =  audio.play(); 
//     myTimer;
// }



//  function StopSound(){
//     audio.pause()
//     // clearInterval(myTimer);

//  }

var i=0;
function beep() {
  var audio = new Audio("sound1.wav");
    if(i==1){
      audio.play();
    }
    else{
      audio.pause();
    }  
}
function PlaySound(bpm){
    var myTimer;
    if(i==0){
      start.innerHTML= "stop"; 
   
  myTimer=setInterval(beep,120000/ bpm);
   i=1;
    }
    else{
      start.innerHTML= "start"; 
        clearInterval(myTimer);
        i=0;
    }
    
}


