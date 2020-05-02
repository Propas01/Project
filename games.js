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

let btnRefresh=document.getElementById("ono-moje");
btnRefresh.addEventListener("click",function(){
    location.reload()
})
let btnRefresh1=document.getElementById("ono-moje1");
btnRefresh1.addEventListener("click",function(){
    location.reload()
})



let buttonX=document.querySelector(".x")
let buttonO=document.querySelector(".o")
let cell=document.querySelector(".cell")

let status1=0;
let status2=1

let tabela=document.querySelector(".tic-tac-toe")
let iks_oks=document.querySelector(".iks-oks")

let h2=document.querySelector(".h2")
let h3=document.querySelector(".h3")

let cell1=document.querySelector(".cell1")
let cell2=document.querySelector(".cell2")
let cell3=document.querySelector(".cell3")
let cell4=document.querySelector(".cell4")
let cell5=document.querySelector(".cell5")
let cell6=document.querySelector(".cell6")
let cell7=document.querySelector(".cell7")
let cell8=document.querySelector(".cell8")
let cell9=document.querySelector(".cell9")

let poruka=document.querySelector(".poruka")
let dugme=document.querySelector(".dugme")
dugme.addEventListener("click",function(){
    location.reload()
})
let cells=[cell1,cell2,cell3,cell4,
cell5,cell6,cell7,cell8,cell9]

function pritisniDugme(znak){
    if(znak=="X"){
        buttonX.style.background="red"
        buttonO.style.background="rgba(89, 53, 136, 0.623)";
        status1=1
        buttonO.style.display="none"
    }
    else if(znak=="O"){
        buttonO.style.background="red";
        buttonX.style.background="rgba(89, 53, 136, 0.623)";
        status1=2;
        buttonX.style.display="none"
        
    }
}


function play(index){
    if(status1=="0"){
        alert("Moras izabrati ko prvi igra");
        return
    }
    else if(status1=="1"){
        if(status2=="1" && cells[index].innerText==""){
           cells[index].innerText="X";
           cells[index].style.fontSize="30px";
           cells[index].style.textAlign="center";
           cells[index].style.paddingTop="35px";
           status2=2
        }
         else if(status2=="2" && cells[index].innerText==""){
           cells[index].innerText="O";
           cells[index].style.fontSize="30px";
           cells[index].style.textAlign="center";
           cells[index].style.paddingTop="35px";
           status2=1
        }
   }
   else if(status1=="2"){
    if(status2=="1" && cells[index].innerText==""){
       cells[index].innerText="O";
       cells[index].style.fontSize="30px";
       cells[index].style.textAlign="center";
       cells[index].style.paddingTop="35px";
       status2=2
    }
     else if(status2=="2" && cells[index].innerText==""){
       cells[index].innerText="X";
       cells[index].style.fontSize="30px";
       cells[index].style.textAlign="center";
       cells[index].style.paddingTop="35px";
       status2=1
    }
}
checkingX();
checkingO();
checkingDraw()
}
function checkingX(){
    if((cells[0].innerText=="X" && cells[1].innerText=="X" && cells[2].innerText=="X")
    ||(cells[3].innerText=="X" && cells[4].innerText=="X" && cells[5].innerText=="X")
    ||(cells[6].innerText=="X" && cells[7].innerText=="X" && cells[8].innerText=="X")
    ||(cells[0].innerText=="X" && cells[3].innerText=="X" && cells[6].innerText=="X")
    ||(cells[1].innerText=="X" && cells[4].innerText=="X" && cells[7].innerText=="X")
    ||(cells[2].innerText=="X" && cells[5].innerText=="X" && cells[8].innerText=="X")
    ||(cells[0].innerText=="X" && cells[4].innerText=="X" && cells[8].innerText=="X")
    ||(cells[2].innerText=="X" && cells[4].innerText=="X" && cells[6].innerText=="X")){
      tabela.style.display="none"
      btnRefresh.style.display="none"  
      buttonX.style.display="none"
      buttonO.style.display="none"
      h2.style.display="none";
      h3.style.display="none";
      iks_oks.style.background="#5F9EA0"
      poruka.style.display="block"
      poruka.innerText="X je pobedio!"
      dugme.style.display="block"
    }
}
function checkingO(){
    if((cells[0].innerText=="O" && cells[1].innerText=="O" && cells[2].innerText=="O")
    ||(cells[3].innerText=="O" && cells[4].innerText=="O" && cells[5].innerText=="O")
    ||(cells[6].innerText=="O" && cells[7].innerText=="O" && cells[8].innerText=="O")
    ||(cells[0].innerText=="O" && cells[3].innerText=="O" && cells[6].innerText=="O")
    ||(cells[1].innerText=="O" && cells[4].innerText=="O" && cells[7].innerText=="O")
    ||(cells[2].innerText=="O" && cells[5].innerText=="O" && cells[8].innerText=="O")
    ||(cells[0].innerText=="O" && cells[4].innerText=="O" && cells[8].innerText=="O")
    ||(cells[2].innerText=="O" && cells[4].innerText=="O" && cells[6].innerText=="O")){
        tabela.style.display="none"
        btnRefresh.style.display="none"  
        buttonX.style.display="none"
        buttonO.style.display="none"
        h2.style.display="none";
        h3.style.display="none";
        iks_oks.style.background="#5F9EA0";
        poruka.style.display="block"
        poruka.innerText="O je pobedio!"
        dugme.style.display="block"
    }
}
function checkingDraw(){
if((cells[0].innerText!=="" &&
    cells[1].innerText!=="" &&
    cells[2].innerText!=="" &&
    cells[3].innerText!=="" &&
    cells[4].innerText!=="" &&
    cells[5].innerText!=="" &&
    cells[6].innerText!=="" &&
    cells[7].innerText!=="" &&
    cells[8].innerText!=="" ) &&

((cells[0].innerText!==cells[1].innerText||
cells[0].innerText!==cells[2].innerText||
cells[1].innerText!==cells[2].innerText) &&

(cells[3].innerText!==cells[4].innerText||
cells[3].innerText!==cells[5].innerText||
cells[4].innerText!==cells[5].innerText) &&

(cells[6].innerText!==cells[7].innerText||
cells[6].innerText!==cells[8].innerText||
cells[7].innerText!==cells[8].innerText) &&

(cells[0].innerText!==cells[3].innerText||
cells[0].innerText!==cells[6].innerText||
cells[3].innerText!==cells[6].innerText) &&

(cells[1].innerText!==cells[4].innerText||
cells[1].innerText!==cells[7].innerText||
cells[4].innerText!==cells[7].innerText) &&

(cells[2].innerText!==cells[5].innerText||
cells[2].innerText!==cells[8].innerText||
cells[5].innerText!==cells[8].innerText) &&

(cells[0].innerText!==cells[4].innerText ||
cells[0].innerText!==cells[8].innerText ||
cells[4].innerText!==cells[8].innerText) &&

(cells[4].innerText!==cells[6].innerText ||
cells[2].innerText!==cells[4].innerText ||
cells[2].innerText!==cells[6].innerText)

)){
    tabela.style.display="none"
      btnRefresh.style.display="none"  
      buttonX.style.display="none"
      buttonO.style.display="none"
      h2.style.display="none";
      h3.style.display="none";
      iks_oks.style.background="#5F9EA0";
      poruka.style.display="block"
      poruka.innerText="Nereseno je!"
      dugme.style.display="block"
}
}

let img1=document.createElement("img");
img1.setAttribute("src","Materijali/1.jpg");
img1.style.width="200px";
img1.style.height="auto"

let img11=document.createElement("img");
img11.setAttribute("src","Materijali/1.jpg");
img11.style.width="200px";
img11.style.height="auto"

let img2=document.createElement("img");
img2.setAttribute("src","Materijali/2.jpg")
img2.style.width="200px";
img2.style.height="auto"

let img12=document.createElement("img");
img12.setAttribute("src","Materijali/2.jpg")
img12.style.width="200px";
img12.style.height="auto"

let img3=document.createElement("img");
img3.setAttribute("src","Materijali/3.jpg")
img3.style.width="200px";
img3.style.height="auto"

let img13=document.createElement("img");
img13.setAttribute("src","Materijali/3.jpg")
img13.style.width="200px";
img13.style.height="auto"

let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");

let playerScore=0;
let computerScore=0;

let btn1=document.querySelector(".slika1")
let btn2=document.querySelector(".slika2")
let btn3=document.querySelector(".slika3")

let playerBox=document.querySelector(".player-score")
let computerBox=document.querySelector(".computer-score")

let porukica=document.querySelector(".porukica")
let select=document.querySelector("select")
let computerChoices=[img11,img12,img13]

function pritisniDugmence(indeks){
    let randomBroj=Math.floor(Math.random()*3)//Mora unutar funkcije da stoji da bi uvek generisao novi random broj
    if(indeks=="1"){
        box1.innerHTML=""
        box1.appendChild(img1);
        box2.innerHTML="";
        box2.appendChild(computerChoices[randomBroj])
    }
    else if(indeks=="2"){
        box1.innerHTML=""
        box1.appendChild(img2)
        box2.innerHTML="";
        box2.appendChild(computerChoices[randomBroj])
    }
    else if(indeks=="3"){
        box1.innerHTML=""
        box1.appendChild(img3)
        box2.innerHTML="";
        box2.appendChild(computerChoices[randomBroj])
    }
    function checking(){
    if(indeks=="1" && computerChoices[randomBroj]==img11 ){
     porukica.innerText="It's a tie"
     }
    else if(indeks=="2" && computerChoices[randomBroj]==img12 ){
    porukica.innerText="It's a tie"
    }
    else if(indeks=="3" && computerChoices[randomBroj]==img13 ){
    porukica.innerText="It's a tie"
    }
    else if(indeks=="1" && computerChoices[randomBroj]==img12){
        porukica.innerText="Player wins";
        playerScore++
        playerBox.innerHTML=`Player:<br>` + playerScore
    }
    else if(indeks=="1" && computerChoices[randomBroj]==img13){
        porukica.innerText="Computer wins"
        computerScore++
        computerBox.innerHTML=`Computer:<br>` + computerScore
        
    }
    else if(indeks=="2" && computerChoices[randomBroj]==img11){
        porukica.innerText="Computer wins"
        computerScore++
        computerBox.innerHTML=`Computer:<br>` + computerScore
    }
    else if(indeks=="2" && computerChoices[randomBroj]==img13){
        porukica.innerText="Player wins"
        playerScore++
        playerBox.innerHTML=`Player:<br>` + playerScore
        
    }
    else if(indeks=="3" && computerChoices[randomBroj]==img11){
        porukica.innerText="Player wins"
        playerScore++
        playerBox.innerHTML=`Player:<br>` + playerScore
    }
    else if(indeks=="3" && computerChoices[randomBroj]==img12){
        porukica.innerText="Computer wins"
        computerScore++
        computerBox.innerHTML=`Computer:<br>` + computerScore
    }
//Igra se do 1
if(select[select.selectedIndex].value=="1"){
        if(playerScore=="1"){
            alert("Igrac pobedio do 1");
            btn1.style.display="none"
            btn2.style.display="none"
            btn3.style.display="none"
            function reloadPage(){
                location.reload()
            }
            //Stranica se riloudjuje nakon pobede
            setTimeout(reloadPage,1000)
        }
        else if(computerScore=="1"){
            alert("Komp pobedio do 1");
            btn1.style.display="none"
            btn2.style.display="none"
            btn3.style.display="none"
            function reloadPage(){
                location.reload()
            }
            setTimeout(reloadPage,1000)
        }
    }

//Igra se do 3
if(select[select.selectedIndex].value=="3"){
        if(playerScore=="3"){
            alert("Igrac pobedio do 3");
            btn1.style.display="none"
            btn2.style.display="none"
            btn3.style.display="none"
            function reloadPage(){
                location.reload()
            }
            //Stranica se riloudjuje nakon pobede
            setTimeout(reloadPage,1000)
        }
        else if(computerScore=="3"){
            alert("Komp pobedio do 3");
            btn1.style.display="none"
            btn2.style.display="none"
            btn3.style.display="none"
            function reloadPage(){
                location.reload()
            }
            setTimeout(reloadPage,1000)
        }
    }
  //Igra se do 5
if(select[select.selectedIndex].value=="5"){
        if(playerScore=="5"){
            alert("Igrac pobedio do 5");
            btn1.style.display="none"
            btn2.style.display="none"
            btn3.style.display="none"
            function reloadPage(){
                location.reload()
            }
            //Stranica se riloudjuje nakon pobede
            setTimeout(reloadPage,1000)
        }
        else if(computerScore=="5"){
            alert("Komp pobedio do 5");
            btn1.style.display="none"
            btn2.style.display="none"
            btn3.style.display="none"
            function reloadPage(){
                location.reload()
            }
            setTimeout(reloadPage,1000)
        }
    }


    }
    checking();
}

