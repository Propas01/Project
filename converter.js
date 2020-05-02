let div = document.querySelector(".toggle-menu");
let p1 = document.querySelector(".text1");
let p2 = document.querySelector(".text2");
let p3 = document.querySelector(".text3");
let p4 = document.querySelector(".text4");
let p5 = document.querySelector(".text5");
let p6 = document.querySelector(".text6");
let p7 = document.querySelector(".text7");
let p8 = document.querySelector(".text8");
let p9 = document.querySelector(".text9");
let status = 1;
function toggleMenu() {
    if (status == 1) {
        div.classList.add("toggle-menu1");
        p1.classList.remove("hide");
        p2.classList.remove("hide");
        p3.classList.remove("hide");
        p4.classList.remove("hide");
        p5.classList.remove("hide");
        p6.classList.remove("hide");
        p7.classList.remove("hide");

        status = 2
    }
    else if (status == 2) {
        div.classList.remove("toggle-menu1");
        p1.classList.add("hide");
        p2.classList.add("hide");
        p3.classList.add("hide");
        p4.classList.add("hide");
        p5.classList.add("hide");
        p6.classList.add("hide");
        p7.classList.add("hide");
        status = 1
    }
}

let textarea = document.querySelector(".tekst")
let prevod = document.querySelector(".prevod");

function convert() {
    if (select1[select1.selectedIndex].value == "latinica" &&
        select2[select2.selectedIndex].value == "cirilica") {
        var chars = {
            a: 'а'
            , b: 'б'
            , v: 'в'
            , g: 'г'
            , d: 'д'
            , đ: 'ђ'
            , e: 'е'
            , ž: 'ж'
            , z: 'з'
            , i: 'и'
            , j: 'ј'
            , k: 'к'
            , l: 'л'
            , lj: 'љ'
            , m: 'м'
            , n: 'н'
            , nj: 'њ'
            , o: 'о'
            , p: 'п'
            , r: 'р'
            , s: 'с'
            , t: 'т'
            , u: 'у'
            , f: 'ф'
            , h: 'х'
            , c: 'ц'
            , č: 'ч'
            , ć: 'ћ'
            , dž: 'џ'
            , š: 'ш'
            , A: 'А'
            , B: 'Б'
            , V: 'В'
            , G: 'Г'
            , D: 'Д'
            , Đ: 'Ђ'
            , E: 'Е'
            , Ž: 'Ж'
            , Z: 'З'
            , I: 'И'
            , J: 'Ј'
            , K: 'К'
            , L: 'Л'
            , Lj: 'Љ'
            , M: 'М'
            , N: 'Н'
            , Nj: 'Њ'
            , O: 'О'
            , P: 'П'
            , R: 'Р'
            , S: 'С'
            , T: 'Т'
            , U: 'У'
            , F: 'Ф'
            , H: 'Х'
            , C: 'Ц'
            , Č: 'Ч'
            , Ć: 'Ћ'
            , Dž: 'Џ'
            , Š: 'Ш'
        };
        var s = textarea.value
        s = s.replace(/[A-z]/g, m => chars[m]);
        prevod.innerHTML = s
    }

    else if (select1[select1.selectedIndex].value == "cirilica" &&
        select2[select2.selectedIndex].value == "latinica") {
        var chars = {
            'а': 'a'
            , 'б': 'b'
            , 'в': 'v'
            , 'г': 'g'
            , 'д': 'd'
            , 'ђ': 'đ'
            , 'е': 'e'
            , 'ж': 'ž'
            , 'з': 'z'
            , 'и': 'i'
            , 'ј': 'j'
            , 'к': 'k'
            , 'л': 'l'
            , 'љ': 'lj'
            , 'м': 'm'
            , 'н': 'n'
            , 'њ': 'nj'
            , 'о': 'o'
            , 'п': 'p'
            , 'р': 'r'
            , 'с': 's'
            , 'т': 't'
            , 'у': 'u'
            , 'ф': 'f'
            , 'х': 'h'
            , 'ц': 'c'
            , 'ч': 'č'
            , 'ћ': 'ć'
            , 'џ': 'dž'
            , 'ш': 'š'
            , 'А': 'A'
            , 'Б': 'B'
            , 'В': 'V'
            , 'Г': 'G'
            , 'Д': 'D'
            , 'Ђ': 'Đ'
            , 'Е': 'E'
            , 'Ж': 'Ž'
            , 'З': 'Z'
            , 'И': 'I'
            , 'J': 'J'
            , 'К': 'K'
            , 'Л': 'L'
            , 'Љ': 'Lj'
            , 'М': 'M'
            , 'Н': 'N'
            , 'Њ': 'Nj'
            , 'О': 'O'
            , 'П': 'P'
            , 'Р': 'R'
            , 'С': 'S'
            , 'Т': 'T'
            , 'У': 'U'
            , 'Ф': 'F'
            , 'Х': 'H'
            , 'Ц': 'C'
            , 'Ч': 'Č'
            , 'Ћ': 'Ć'
            , 'Џ': 'Dž'
            , 'Ш': 'Š'
        };
        var s = textarea.value
        s = s.replace(/[абвгдђежзијклљмнњопрстуфхцчћџшАБВГДЂЕЖЗИJКЛЉМНЊОПРСТУФХЦЧЋЏШ]/g, function (char) {
            return chars[char]
        });// /g je global search; char je parametar funkcije koji nam vraca preslikanu vrednost
        prevod.innerHTML = s
    }
    else {
        alert("ne mozes konvertovati isto pismo u isto pismo xD")

    }
}

//Oznacujemo input, select i output elemente

let input=document.querySelector(".input")
let output=document.querySelector(".output")
let select=document.getElementById("options")

//Funkcija konvertovanja

function convert1(){
    
if(select[select.selectedIndex].value=="uppercase"  ){
        output.value=input.value.toUpperCase()
}
if(select[select.selectedIndex].value=="lowercase"){
    output.value=input.value.toLowerCase()
}
if(select[select.selectedIndex].value=="reverse"){
    function reverse1(){
        output.value=""
        for(let i=input.value.length-1;i>=0;i--){
            output.value+=input.value[i]
        }
    }
    reverse1()
}

if(select[select.selectedIndex].value=="morse"){
    var letters = [ ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
    var morseLetters = [ "\xa0\xa0\xa0\xa0", ". ___", "___ . . .", "___ . ___ .", "___ . .", ".", ". . ___ .", "___ ___ .", ". . . .", ". .", ". ___ ___ ___", "___ . ___", ". ___ . .",  "___ ___", "___ .", "___ ___ ___", ". ___ ___ .", "___ ___ . ___", ". ___ .", ". . .", "_", ". . ___", ". . . ___", ". ___ ___", "___ . . ___", "___ . ___ ___", "___ ___ . .", ". ___ ___ ___ ___", ". . ___ ___ ___", ". . . ___ ___", ". . . . ___", ". . . . .", "___ . . . .", "___ ___ . . .", "___ ___ ___ . .", "___ ___ ___ ___ .", "___ ___ ___ ___ ___" ]
    function translate(){
        output.value=""
        for (let i=0; i<input.value.length; i++){
            for(let j=0; j<37; j++){
                if(input.value[i]==letters[j]){
                    output.value+=morseLetters[j]
                }
            }
        }
    }
    translate()
}
}
//da se funkcija pokrece na keyup
function convert2(){
     output.value=input.value.toUpperCase()
     if(select[select.selectedIndex].value=="reverse"){
        function reverse1(){
            output.value=""
            for(let i=input.value.length-1;i>=0;i--){
                output.value+=input.value[i]
            }
        }
        reverse1()
    }
if(select[select.selectedIndex].value=="lowercase"){
    output.value=input.value.toLowerCase()
}
if(select[select.selectedIndex].value=="morse"){
    var letters = [ ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
    var morseLetters = [ "\xa0\xa0\xa0\xa0", ". ___", "___ . . .", "___ . ___ .", "___ . .", ".", ". . ___ .", "___ ___ .", ". . . .", ". .", ". ___ ___ ___", "___ . ___", ". ___ . .",  "___ ___", "___ .", "___ ___ ___", ". ___ ___ .", "___ ___ . ___", ". ___ .", ". . .", "_", ". . ___", ". . . ___", ". ___ ___", "___ . . ___", "___ . ___ ___", "___ ___ . .", ". ___ ___ ___ ___", ". . ___ ___ ___", ". . . ___ ___", ". . . . ___", ". . . . .", "___ . . . .", "___ ___ . . .", "___ ___ ___ . .", "___ ___ ___ ___ .", "___ ___ ___ ___ ___" ]
    function translate(){
        output.value=""
        for (let i=0; i<input.value.length; i++){
            for(let j=0; j<37; j++){
                if(input.value[i]==letters[j]){
                    output.value+=morseLetters[j]
                }
            }
        }
    }
    translate()
}
}
//Font type and style function

function fontFun(index){
    if(index=="1"){
        input.style.fontWeight = "900" //IDE BEZ input.value!!
}
if(index=="2"){
    input.style.fontStyle = "italic"
}
if(index=="3"){
    input.style.textDecoration = "underline"
}
if(index=="4"){
    input.style.textDecoration = "line-through";
}
if(index=="5"){
    input.style.fontSize = "24px";
}
if(index=="6"){
    input.style.color = "red";
}
if(index=="7"){
    input.style="none"
    
}
}