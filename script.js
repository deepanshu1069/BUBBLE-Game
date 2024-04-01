
function makebubble(){
    var bub="";
for(var i=0; i<200; i++){
    var x= Math.floor(Math.random()*10);
   bub+=` <div class="bubble">${x}</div>`
}
document.querySelector(".point2").innerHTML=bub;
}
var timer=60;
function runtimer(){
    var timeval= setInterval(function() {
     if(timer>0){
        timer--; 
     document.querySelector("#timeinterval").textContent=  timer;
     }
     else{
        clearInterval(timeval);
        document.querySelector(".point2").innerHTML="";
     }
    }, 1000);
}

var rn=0;
function getnewhit(){
     rn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=rn;
}

document.querySelector(".point2").addEventListener("click",function(a){
    var clickednum= Number(a.target.textContent);
    if(clickednum==rn){
        increaseScore();
        // makebubble();
        getnewhit();



    }
})
var score=0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}
runtimer();
makebubble();
getnewhit();
// increaseScore();