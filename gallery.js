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

//Create images
let img1=document.createElement("img")
img1.setAttribute("src","Materijali/slika1.jpg")

let img2=document.createElement("img")
img2.setAttribute("src","Materijali/slika2.jpg")

let img3=document.createElement("img")
img3.setAttribute("src","Materijali/slika3.jpg")

let img4=document.createElement("img")
img4.setAttribute("src","Materijali/slika4.jpg")

let img5=document.createElement("img")
img5.setAttribute("src","Materijali/slika5.jpg")

let img6=document.createElement("img")
img6.setAttribute("src","Materijali/slika6.jpg")

let bodyBar=document.querySelector(".body-bar")

let images=[img1,img2,img3,img4,img5,img6]

function slideShow(index){
bodyBar.style.background="blueviolet";
bodyBar.style.opacity="0.7";

let btnNext=document.createElement("button");
btnNext.setAttribute("class","btn-next")
btnNext.innerHTML="Next";



let btnPrev=document.createElement("button");
btnPrev.setAttribute("class","btn-prev")
btnPrev.innerHTML="Prev";
bodyBar.appendChild(btnNext)
bodyBar.appendChild(btnPrev)

btnNext.onclick=function(){
    if(index=="1"){
        img2.style.position="absolute";
        img2.style.width="800px";
        img2.style.height="400px";
        img2.style.left="350px";
        img2.style.top="65px";
        bodyBar.appendChild(img2) 
        bodyBar.removeChild(img1);
        index=2
    }
    else if(index=="2"){
        img3.style.position="absolute";
        img3.style.width="800px";
        img3.style.height="400px";
        img3.style.left="350px";
        img3.style.top="65px";
        bodyBar.appendChild(img3) 
        bodyBar.removeChild(img2);
        index=3
    }
    else if(index=="3"){
        img4.style.position="absolute";
        img4.style.width="800px";
        img4.style.height="400px";
        img4.style.left="350px";
        img4.style.top="65px";
        bodyBar.appendChild(img4) 
        bodyBar.removeChild(img3);
        index=4
    }
    else if(index=="4"){
        img5.style.position="absolute";
        img5.style.width="800px";
        img5.style.height="400px";
        img5.style.left="350px";
        img5.style.top="65px";
        bodyBar.appendChild(img5) 
        bodyBar.removeChild(img4);
        index=5
    }
    else if(index=="5"){
        img6.style.position="absolute";
        img6.style.width="800px";
        img6.style.height="400px";
        img6.style.left="350px";
        img6.style.top="65px";
        bodyBar.appendChild(img6) 
        bodyBar.removeChild(img5);
        index=6
    }
    else if(index=="6"){
        img1.style.position="absolute";
        img1.style.width="800px";
        img1.style.height="400px";
        img1.style.left="350px";
        img1.style.top="65px";
        bodyBar.appendChild(img1) 
        bodyBar.removeChild(img6);
        index=1
    }
}
    btnPrev.onclick=function(){
        if(index=="1"){
            img6.style.position="absolute";
            img6.style.width="800px";
            img6.style.height="400px";
            img6.style.left="350px";
            img6.style.top="65px";
            bodyBar.appendChild(img6) 
            bodyBar.removeChild(img1);
            index=6
        }
        else if(index=="2"){
            img1.style.position="absolute";
            img1.style.width="800px";
            img1.style.height="400px";
            img1.style.left="350px";
            img1.style.top="65px";
            bodyBar.appendChild(img1) 
            bodyBar.removeChild(img2);
            index=1
        }
        else if(index=="3"){
            img2.style.position="absolute";
            img2.style.width="800px";
            img2.style.height="400px";
            img2.style.left="350px";
            img2.style.top="65px";
            bodyBar.appendChild(img2) 
            bodyBar.removeChild(img3);
            index=2
        }
        else if(index=="4"){
            img3.style.position="absolute";
            img3.style.width="800px";
            img3.style.height="400px";
            img3.style.left="350px";
            img3.style.top="65px";
            bodyBar.appendChild(img3) 
            bodyBar.removeChild(img4);
            index=3
        }
        else if(index=="5"){
            img4.style.position="absolute";
            img4.style.width="800px";
            img4.style.height="400px";
            img4.style.left="350px";
            img4.style.top="65px";
            bodyBar.appendChild(img4) 
            bodyBar.removeChild(img5);
            index=4
        }
        else if(index=="6"){
            img5.style.position="absolute";
            img5.style.width="800px";
            img5.style.height="400px";
            img5.style.left="350px";
            img5.style.top="65px";
            bodyBar.appendChild(img5) 
            bodyBar.removeChild(img6);
            index=5
        }
}

if(index=="1"){

img1.style.position="absolute";
img1.style.width="800px";
img1.style.height="400px";
img1.style.left="350px";
img1.style.top="65px";
bodyBar.appendChild(img1)


}
if(index=="2"){
img2.style.width="800px";
img2.style.height="400px";
img2.style.position="absolute";
img2.style.left="350px";
img2.style.top="65px";
bodyBar.appendChild(img2)




}
if(index=="3"){
img3.style.width="800px";
img3.style.height="400px";
img3.style.position="absolute";
img3.style.left="350px";
img3.style.top="65px";
bodyBar.appendChild(img3)



    }
if(index=="4"){
img4.style.width="800px";
img4.style.height="400px";
img4.style.position="absolute";
img4.style.left="350px";
img4.style.top="65px";
bodyBar.appendChild(img4)


}
if(index=="5"){
    img5.style.width="800px";
img5.style.height="400px";
img5.style.position="absolute";
img5.style.left="350px";
img5.style.top="65px";
bodyBar.appendChild(img5)

   }
if(index=="6"){
img6.style.width="800px";
img6.style.height="400px";
img6.style.position="absolute";
img6.style.left="350px";
img6.style.top="65px";
bodyBar.appendChild(img6)


 }   
}