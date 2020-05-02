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
document.form.textview.disabled=true;

var value = document.getElementById('value');
var numbers = document.getElementsByClassName('number');
var symbols = document.getElementsByClassName('symbol');
var evaluate = document.getElementById('got');
var lastClicked = 'symbol';
//Aray.from kreira niz od stringa
Array.from(numbers).forEach(function(numberElement) {
  var numberValue = numberElement.textContent;
  numberElement.addEventListener('click', function() {
    value.value += numberValue;
    lastClicked = 'number';
    
  });
});

Array.from(symbols).forEach(function(numberElement) {
  var symbolValue = numberElement.textContent;
  numberElement.addEventListener('click', function() {
    if (lastClicked !== 'symbol') {
      value.value += symbolValue;
      lastClicked = 'symbol';
    }
  });
});
function jednako(){
    if(document.form.textview.value===""){
        alert("Moras ipak da uneses nesto :)")
        return
    }
    let x=eval(document.form.textview.value);
    document.form.textview.value=x;
}
function clean(){
    document.form.textview.value=""
}
function backspace(){
    let x=document.form.textview.value;
    document.form.textview.value=x.substring(0,x.length-1)
}
let button1=document.querySelector(".button1")
let span=document.querySelector(".span")
let calc1=document.querySelector(".calculator1")
let status1=1;
let input=document.querySelector(".text_1")
function promeniCalc(){
    if(status1==1){
        calc1.style.display="grid";
        span.innerText="-";
        span.classList.add("span1");
        input.classList.add("text_2")
        status1=2
    }
    else if(status1==2){
        calc1.style.display="none";
        span.innerText="+";
        span.classList.remove("span1");
        input.classList.remove("text_2")
        status1=1
    }
}
//Faktorijel

function sinus(){
    document.form.textview.value=Math.sin(document.form.textview.value)
}
function kosinus(){
    document.form.textview.value=Math.cos(document.form.textview.value)
}
function tangens(){
    document.form.textview.value=Math.tan(document.form.textview.value)
}
function kotangens(){
    document.form.textview.value=1/Math.tan(document.form.textview.value)
}
function stepen(){
    document.form.textview.value=Math.pow(document.form.textview.value,2)
}

function koren(){
    document.form.textview.value=Math.pow(document.form.textview.value,1/2)
}
function logaritam(){
    document.form.textview.value=Math.log(document.form.textview.value)
}
function e(){
    document.form.textview.value=Math.E
}
function pi(){
    document.form.textview.value=Math.PI
}

function abs(){
        document.form.textview.value=Math.abs(document.form.textview.value)
    
}
