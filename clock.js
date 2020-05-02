
let div=document.querySelector(".toggle-menu");
let p1=document.querySelector(".text1");
let p2=document.querySelector(".text2");
let p3=document.querySelector(".text3");
let p4=document.querySelector(".text4");
let p5=document.querySelector(".text5");
let p6=document.querySelector(".text6");
let p7=document.querySelector(".text7");
let p8=document.querySelector(".text8");
let p9=document.querySelector(".text9");
let status=1;
function toggleMenu(){
if (status==1){
div.classList.add("toggle-menu1");
p1.classList.remove("hide");
p2.classList.remove("hide");
p3.classList.remove("hide");
p4.classList.remove("hide");
p5.classList.remove("hide");
p6.classList.remove("hide");
p7.classList.remove("hide");

status=2
}
else if(status==2){
div.classList.remove("toggle-menu1");
p1.classList.add("hide");
p2.classList.add("hide");
p3.classList.add("hide");
p4.classList.add("hide");
p5.classList.add("hide");
p6.classList.add("hide");
p7.classList.add("hide");
status=1
}
}

setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;//sekunde pretovren u minute; uzima tacno koliko je sekuni, a ne koliko je sekundi porlso od tog dana!!!!!!
  const minutesRatio = ( secondsRatio+ currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio+ currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

let sat=document.querySelector(".sat")
let minut=document.querySelector(".minut")
let sekund=document.querySelector(".sekund")

function digitalClock(){

let day=new Date();

let seconds=day.getSeconds();
let minutes=day.getMinutes();
let hours=day.getHours();

if(seconds<10 && minutes <10 && hours<10){
  sekund.innerHTML="0"+seconds;
  minut.innerHTML="0"+minutes+"  :"
  sat.innerHTML="0"+hours+"  :"
}
else if(seconds<10 && minutes <10 && hours>=10){
  sekund.innerHTML="0"+seconds;
  minut.innerHTML="0"+minutes+"  :"
  sat.innerHTML=hours+"  :"
}
else if(seconds<10 && minutes >=10 && hours>=10){
  sekund.innerHTML="0"+seconds;
  minut.innerHTML=minutes+"  :"
  sat.innerHTML=hours+"  :"
}
else if(seconds<10 && minutes >=10 && hours<10){
  sekund.innerHTML="0"+seconds;
  minut.innerHTML=minutes+"  :"
  sat.innerHTML="0"+hours+"  :"
}

else if(seconds>=10 && minutes <10 && hours<10){
  sekund.innerHTML=seconds;
  minut.innerHTML="0"+minutes+"  :"
  sat.innerHTML="0"+hours+"  :"
}
else if(seconds>=10 && minutes <10 && hours>=10){
  sekund.innerHTML=seconds;
  minut.innerHTML="0"+minutes+"  :"
  sat.innerHTML=hours+"  :"
}
else if(seconds>=10 && minutes >=10 && hours>=10){
  sekund.innerHTML=seconds;
  minut.innerHTML=minutes+"  :"
  sat.innerHTML=hours+"  :"
}
else if(seconds>=10 && minutes >=10 && hours<10){
  sekund.innerHTML=seconds;
  minut.innerHTML=minutes+"  :"
  sat.innerHTML="0"+hours+"  :"
}
}
digitalClock()

setInterval(digitalClock,1000);



let stop=document.querySelector(".stop")

let sati=document.querySelector(".sati")
let minuti=document.querySelector(".minuti")
let sekunde=document.querySelector(".sekunde")

var x;

let status11=1
let stop11=document.querySelector(".stop11")
var time=0
function stoperica(){

time++
  if(time>=60 && time<3600){
    let seconds=time%60
    let minutes=Math.floor(time/60)
    sekunde.innerHTML=time%60
    minuti.innerHTML=Math.floor(time/60)+":"
     if(seconds<10){
      sekunde.innerHTML="0"+time%60
    }
    if(minutes<10){
      minuti.innerHTML="0"+Math.floor(time/60)+":"
    }
  }
  else if(time>=3600&&time<7200){
    let seconds=time%60;
    let minutes=Math.floor(time/60-60)
    let hours=Math.floor(time/3600)
    sekunde.innerHTML=time%60
    minuti.innerHTML=Math.floor(time/60-60)+":"
    sati.innerHTML=Math.floor(time/3600)+":"
    if(seconds<10){
      sekunde.innerHTML="0"+time%60
    }
    if(minutes<10){
      minuti.innerHTML="0"+Math.floor(time/60-60)+":"
    }
    if(hours<10){
      sati.innerHTML="0"+Math.floor(time/3600)+":"
    }
  }// za svaki sat minute oduzimamo za n*60 al ce me mrzi da pravim to
  //jer niko nije operisan da stopuje do milion
  else if(time>=7200&&time<10800){
    let seconds=time%60;
    let minutes=Math.floor(time/60-120)
    let hours=Math.floor(time/3600)
    sekunde.innerHTML=time%60
    minuti.innerHTML=Math.floor(time/60-120)+":"
    sati.innerHTML=Math.floor(time/3600)+":"
    if(seconds<10){
      sekunde.innerHTML="0"+time%60
    }
    if(minutes<10){
      minuti.innerHTML="0"+Math.floor(time/60-120)+":"
    }
    if(hours<10){
      sati.innerHTML="0"+Math.floor(time/3600)+":"
    }
  }
  
  else if(time<10){
    sekunde.innerHTML="0"+time
  }
  else if(time>=10){
    sekunde.innerHTML=time
  }
  
 x= setTimeout(stoperica,1000)
  
}


function stopiraj(){
  clearTimeout(x)
}
function cisti(){
  sati.innerHTML="00:"
  minuti.innerHTML="00:"
  sekunde.innerHTML="00";
  time=0
  //clearTimeout(x)// da bi ga ujedno i stoprili i izbrisali
}

function menjanje(){
  if(status11=="1"){
    stop11.style.display="block";
    stop.style.display="none"
    status11=2
  }
  else if(status11=="2"){
    stop11.style.display="none";
    stop.style.display="block"
    status11=1
  }
}

let btnStart=document.querySelector(".btn-start")
let btnStop=document.querySelector(".btn-stop")
let status22=1

let fieldset=document.querySelector(".div")

let vreme=document.querySelector(".vreme")

let sati1=document.querySelector(".sati1")
let minuti1=document.querySelector(".minutes11")
let sekunde1=document.querySelector(".sekunde1")

var y;
/*var seconds1;
      minutes1;
      hours1;
    nije neophodno*/
    // Uzima vreme iz drop down liste
function uzmiVreme(){
  seconds1=sekunde11.sekunde111[sekunde11.sekunde111.selectedIndex].value
  minutes1=minuti11.minuti111[minuti11.minuti111.selectedIndex].value
  hours1=sati11.sati111[sati11.sati111.selectedIndex].value
}
// funkcija koja pokrece odbrojavanje
function countdown(){
  fieldset.style.display="none";
  vreme.style.display="flex";
  if(seconds1>0 && (minutes1>=0 || hours1>=0)){
  seconds1--
  }
  
  sekunde1.innerHTML=seconds1
  minuti1.innerHTML=minutes1+":"
  sati1.innerHTML=hours1+":"
  
  if(seconds1<10){
    sekunde1.innerHTML="0"+seconds1
  }
  if(minutes1<10 ){
    minuti1.innerHTML="0"+minutes1+":"
  }
  if(hours1<10){
    sati1.innerHTML="0"+hours1+":"
  }
   if(seconds1=="0" && minutes1>0 ){
    minutes1--;
    seconds1=60;
  }
  if(hours1>0 && minutes1=="0" && seconds1=="0" ){
    hours1--;
    minutes1=59
    seconds1=60
}
if(seconds1=="0" && minutes1=="0" && hours1=="0"){
  
  alert("Isteklo vreme");
  return
}


 y=setTimeout(countdown,1000)
}
// Stopira brojac
function stopiraj1(){
  clearTimeout(y)
}
let btnClear=document.querySelector(".btn-clear")
// Mogucnost da se brojac stopira i pusti
function promeniStatus(){
  if(status22=="1"){
    btnStart.style.display="none"
    btnStop.style.display="block";
    btnClear.style.display="block"
    status22=2
    
  }
  else if(status22=="2"){
    btnStop.style.display="none"
    btnStart.style.display="block";
    btnClear.style.display="block"
    status22=1
  }
}
//Resatrtuje brojac, tj. da ga vrati na pocetno stanje
function vrati(){
location.reload()
}