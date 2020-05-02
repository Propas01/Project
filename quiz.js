
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


let div1=document.querySelector(".div1")
let div2=document.querySelector(".div2")
let div3=document.querySelector(".div3")

let range1=document.querySelector(".range1")
let range2=document.querySelector(".range2")
let range3=document.querySelector(".range3")

function vrednost1(){
div1.innerHTML=range1.value
}

function vrednost2(){
div2.innerHTML=range2.value
}

let time=20

function vrednost3(){
    div3.innerHTML=range3.value+"s"
    time=range3.value//Ovde smo definisali vreme koje se menja u zavisnosti od vrednosti na range3
}
let bodyBar=document.querySelector(".body-bar")

let btnPocni=document.querySelector(".pocni")
let par1=document.querySelector(".p1")
let par2=document.querySelector(".p2")
let par3=document.querySelector(".p3")
let par4=document.querySelector(".p4")

let select=document.querySelector("select")
let preQuiz=document.querySelector(".pre-quiz");
let score=0;

let timer=document.querySelector(".timer");
let poeni=document.querySelector(".poeni");

let izracunaj=document.querySelector(".izracunaj");
let upisi=document.querySelector(".upisi");
let quiz=document.querySelector(".quiz");

let randomBroj2;
let randomBroj1;
function pocni(){
   
    if(range1.value>=range2.value){
        alert("Vrednost do mora biti veca nego vrednost od");
        return
    }
    time--
    //Uklonili smo i dodavali odredjene elemente
    div1.style.display="none"
    div2.style.display="none"
    div3.style.display="none"
    btnPocni.style.display="none"
    select.style.display="none"

    range1.style.display="none"
    range2.style.display="none"
    range3.style.display="none"
    
    par1.style.display="none"
    par2.style.display="none"
    par3.style.display="none"
    par4.style.display="none"

    timer.style.display="block"
    poeni.style.display="block"
    
    upisi.style.display="block"

    timer.innerHTML="TIME:"+ " " +time+" "+"s"
    poeni.innerHTML="SCORE:"+ "  " +score;
    izracunaj.style.display="block"
    //Ako je sabiranje u pitanju
if(select[select.selectedIndex].value=="+"){
    if(time=="0"){
        alert("Vreme isteklo hehe")
        upisi.value=""
        time=Math.floor(range3.value-1)
        score--
        randomBroj1=Math.floor(range1.value)+Math.floor(Math.random()*(range2.value-range1.value))
        randomBroj2=Math.floor(range1.value)+Math.floor(Math.random()*(range2.value-range1.value))
        izracunaj.innerHTML=randomBroj1 + "+" + randomBroj2
    }
    // Setuje random broj kada se funkcija prvi put pokrene
    if(time==Math.floor(range3.value-1)){
        randomBroj1=Math.floor(range1.value)+Math.floor(Math.random()*(range2.value-range1.value))
        randomBroj2=Math.floor(range1.value)+Math.floor(Math.random()*(range2.value-range1.value))
        izracunaj.innerHTML=randomBroj1 + "+" + randomBroj2
    }
 
    //Provera da li je uneta vrednost jednaka sa random vrednoscu
    if(upisi.value==eval(izracunaj.innerHTML) && izracunaj.innerHTML!==""){
        alert("Bravo :(; I corava koka neko zrno ubode");
        upisi.value=""
        score++
        randomBroj1=Math.floor(range1.value)+Math.floor(Math.random()*(range2.value-range1.value))
        randomBroj2=Math.floor(range1.value)+Math.floor(Math.random()*(range2.value-range1.value))
        izracunaj.innerHTML=randomBroj1 + "+" + randomBroj2
        time=Math.floor(range3.value-1)
        
    }
}
    //Ako je oduzimanje u pitanju
    if(select[select.selectedIndex].value=="-"){
        if(time=="0"){
            alert("Vreme isteklo hehe")
            upisi.value=""
            time=Math.floor(range3.value-1)
            score--
            randomBroj1=Math.floor(range1.value)+Math.floor(Math.random()*(range2.value-range1.value))
            randomBroj2=Math.floor(range1.value)+Math.floor(Math.random()*(range2.value-range1.value))
            izracunaj.innerHTML=randomBroj1 + "-" + randomBroj2
        }
        // Setuje random broj kada se funkcija prvi put pokrene
        if(time==Math.floor(range3.value-1)){
            randomBroj1=Math.floor(range1.value)+Math.floor(Math.random()*(range2.value-range1.value))
            randomBroj2=Math.floor(range1.value)+Math.floor(Math.random()*(range2.value-range1.value))
            izracunaj.innerHTML=randomBroj1 + "-" + randomBroj2
        }

        //Provera da li je uneta vrednost jednaka sa random vrednoscu
        if(upisi.value==eval(izracunaj.innerHTML) && izracunaj.innerHTML!==""){
            alert("Bravo :(; I corava koka neko zrno ubode");
            upisi.value=""
            score++
            randomBroj1=Math.floor(range1.value)+Math.floor(Math.random()*(range2.value-range1.value))
            randomBroj2=Math.floor(range1.value)+Math.floor(Math.random()*(range2.value-range1.value))
            izracunaj.innerHTML=randomBroj1 + "-" + randomBroj2
            time=Math.floor(range3.value-1);
            
        }
    }
    setTimeout(pocni,1000)
}

