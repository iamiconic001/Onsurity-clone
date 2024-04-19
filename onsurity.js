let click1=document.querySelector(".circleicons1");
let kiaraimg=document.querySelector("#kiara");
let kiarah3=document.querySelector("#kiarah3");
let kiarah4=document.querySelector("#kiarah4");
let ranbirimg=document.querySelector("#ranbir");
let ranbirh3=document.querySelector("#ranbirh3");
let ranbirh4=document.querySelector("#ranbirh4");
let sidimg=document.querySelector("#sid");
let sidh3=document.querySelector("#sidh3");
let sidh4=document.querySelector("#sidh4");
let sidpara=document.querySelector("#sidpara");
let ranbirpara=document.querySelector("#ranbirpara");
let kiarapara=document.querySelector("#kiarapara");



click1.addEventListener("click" , swapping);
click1.addEventListener("dblclick" , ()=>{
    location.reload();
});


function swapping(){
    kiaraimg.setAttribute("src" , "https://static.trendscatchers.io/uploads/2021/01/uk-theguardian.jpg");
    ranbirimg.setAttribute("src" , "https://pbs.twimg.com/media/E57HpmyVgAghbOd.jpg");
    sidimg.setAttribute("src" , "https://wallpapercave.com/wp/wp6735402.jpg");
    kiarah3.innerText="Zayn Malik";
    kiarah4.innerText="(English Singer)";
    ranbirh3.innerText="Lionel Messi";
    ranbirh4.innerText="(Argentine professional footballer)";
    sidh3.innerText="Leonardo DiCaprio";
    sidh4.innerText="(American actor and film producer)";
    ranbirpara.innerText="It’s fantastic that you care so much about each person. We appreciate your service. Thank you for everything you’ve done to get where you are now in nursing. Those under your care are lucky to have your skillful hands and generous spirits. Thank you for your hard work, dedication, and helpfulness.";
    sidpara.innerText="It’s fantastic that you care so much about each person. We appreciate your service. Thank you for everything you’ve done to get where you are now in nursing. Those under your care are lucky to have your skillful hands and generous spirits. Thank you for your hard work, dedication, and helpfulness.";

    kiarapara.innerText="It’s fantastic that you care so much about each person. We appreciate your service. Thank you for everything you’ve done to get where you are now in nursing. Those under your care are lucky to have your skillful hands and generous spirits. Thank you for your hard work, dedication, and helpfulness.";
}





let changeopacity=document.querySelector(".notvisible");
let a1=document.querySelector(".anchor1");

a1.onmouseenter=work1;
a1.onmouseout=work2;
function work2(){
    changeopacity.style.opacity = 0;
    changeopacity.style.zIndex = -1;
}
function work1(){
    changeopacity.style.opacity = 1;
    changeopacity.style.zIndex = 3;
}

let changeopacity2=document.querySelector(".notvisible2");
let a2=document.querySelector(".anchor2");

let changeopacity3=document.querySelector(".notvisible3");
let a3=document.querySelector(".anchor3");

a2.onmouseenter=work3;
a2.onmouseout=work4;
function work4(){
    changeopacity2.style.opacity = 0;
}
function work3(){
    changeopacity2.style.opacity = 1;
}


a3.onmouseenter=work5;
a3.onmouseout=work6;
function work6(){
    changeopacity3.style.opacity = 0;
}
function work5(){
    changeopacity3.style.opacity = 1;
}



let img1=document.querySelector(".facebook");
let img2=document.querySelector(".insta");
let img3=document.querySelector(".twitter");

img1.onclick=imageClick1;
img2.onclick=imageClick2;
img3.onclick=imageClick3;

function imageClick1() {
    window.location = "https://www.facebook.com/onsurity/";
}
function imageClick2() {
    window.location = "https://www.instagram.com/onsurity_/p/Ciwdxj7B788/";
}
function imageClick3() {
    window.location = "https://twitter.com/onsurity/status/1392792246693482497";
}






