name=prompt("Cao :) kako se zoves?")



let h2=document.querySelector(".podnaslov")
h2.innerHTML="Caooo" +" " + name + "!" 



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

//Promeni boju bordure

let slika=document.querySelector(".slika")

function changeBorderColor(boja){
    if(boja.value==="blue"){
        slika.style.borderColor="blue"
    }
    else if(boja.value==="red"){
        slika.style.borderColor="red"
    }
    else if(boja.value==="orange"){
        slika.style.borderColor="orange"
    }
    else if(boja.value==="random"){
        var boje=["green","yellow","purple","pink","ultraviolet"]
        let randomBroj=Math.floor(Math.random()*5)
        slika.style.borderColor=boje[randomBroj]
    }
    else if(boja.value==="reset"){
        slika.style.borderColor="red"
    }
}

//Promeni zamagljenost



function changeBLur(magla){
    if(magla.value==="0"){
        slika.style.filter="blur(0px)"
    }
    else if(magla.value==="1"){
        slika.style.filter="blur(1px)"
    }
    else if(magla.value==="2"){
        slika.style.filter="blur(2px)"
    }
    else if(magla.value==="3"){
        slika.style.filter="blur(3px)"
    }
    else if(magla.value==="4"){
        slika.style.filter="blur(4px)"
    }
    else if(magla.value==="5"){
        slika.style.filter="blur(5px)"
    }
    else if(magla.value==="6"){
        slika.style.filter="blur(6px)"
    }

}

//Change hue Rotate

function changeHueRotate(hue){
if(hue.value==="0"){
    slika.style.filter="hue-rotate(0deg)"
}
else if(hue.value==="1"){
    slika.style.filter="hue-rotate(45deg)"
}
else if(hue.value==="2"){
    slika.style.filter="hue-rotate(90deg)"
}
else if(hue.value==="3"){
    slika.style.filter="hue-rotate(135deg)"
}
else if(hue.value==="4"){
    slika.style.filter="hue-rotate(180deg)"
}
else if(hue.value==="5"){
    slika.style.filter="hue-rotate(270deg)"
}
}

//Change button color
let btn1=document.querySelector(".btn1")
let btn2=document.querySelector(".btn2")
let btn3=document.querySelector(".btn3")
let btn4=document.querySelector(".btn4")
let btn5=document.querySelector(".btn5")

function changeButtonColor(pst){
    if(pst.value==="0"){
        btn1.style.background="Crimson"
        btn2.style.background="DarkMagenta"
        btn3.style.background="Chartreuse"
        btn4.style.background="DarkGoldenRod"
        btn5.style.background="CornflowerBlue"
    }
    else if(pst.value==="1"){
        btn1.style.background="DarkCyan"
        btn2.style.background="DarkRed"
        btn3.style.background="DarkSlateBlue"
        btn4.style.background="DarkOrchid"
        btn5.style.background="Darkgreen"
    }
    else if(pst.value==="2"){
        btn1.style.background="LawnGreen"
        btn2.style.background="indigo"
        btn3.style.background="HotPink"
        btn4.style.background="LightSeaGreen"
        btn5.style.background="Magenta"
    }
    else if(pst.value==="3"){
        btn1.style.background="cyan"
        btn2.style.background="blue"
        btn3.style.background="gold"
        btn4.style.background="purple"
        btn5.style.background="yellowgreen"
    }
    else if(pst.value==="4"){
        btn1.style.background="Violet"
        btn2.style.background="Thistle"
        btn3.style.background="SteelBlue"
        btn4.style.background="Teal"
        btn5.style.background="Tomato"
    }
    else if(pst.value==="5"){
        btn1.style.background="SeaGreen"
        btn2.style.background="Navy"
        btn3.style.background="PaleVioletRed"
        btn4.style.background="Orchid"
        btn5.style.background="Orange"
    }
    else if(pst.value==="6"){
        btn1.style.background="MediumPurple"
        btn2.style.background="MediumSpringGreen"
        btn3.style.background="MediumTurquoise"
        btn4.style.background="MediumSlateBlue"
        btn5.style.background="MediumOrchid"
    }
    }

let divMenjaj=document.querySelector(".color")
let colors=["#5F9EA0","#8A2BE2","#8B0000","#228B22","#FF00FF",
"#BA55D3","#FF00FF","#C71585","#FF4500","#2E8B57","#6A5ACD",
"#708090","#FFFF00","##008080","#EE82EE","#778899"]
function menjajMe(){
    let random=Math.floor(Math.random()*17)
    divMenjaj.style.background=colors[random]
}

let addBtn=document.querySelector(".add")
let subBtn=document.querySelector(".sub")

let paragraf=document.querySelector(".counter-text")
let broj=0;

function addition(index){
    if(index=="+"){
        broj++;
        paragraf.innerHTML="COUNTER:<br><br>"+broj

    }
    else if(index=="-"){
        broj--;
        paragraf.innerHTML="COUNTER:<br><br>"+broj

    }
}
