/* ==========================================
TYPEWRITER EFFECT
========================================== */

const typingText =
"Some people become part of our life without making any noise... Yet they leave the most beautiful memories. Happy Birthday Srivalli ❤️";

let i = 0;

function typeWriter(){

if(i < typingText.length){

document.getElementById("typing").innerHTML += typingText.charAt(i);

i++;

setTimeout(typeWriter,45);

}

}

window.addEventListener("load",()=>{

setTimeout(typeWriter,1200);

});


/* ==========================================
LOADER
========================================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1000);

},2500);

});


/* ==========================================
MUSIC
========================================== */

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.addEventListener("click",()=>{

if(!playing){

music.play();

playing=true;

musicBtn.innerHTML="⏸";

}

else{

music.pause();

playing=false;

musicBtn.innerHTML="🎵";

}

});


/* ==========================================
POPUP
========================================== */

const popup=document.getElementById("popup");

const surprise=document.getElementById("surprise");

const closePopup=document.getElementById("closePopup");

surprise.onclick=()=>{

popup.style.display="flex";

createConfetti();

}

closePopup.onclick=()=>{

popup.style.display="none";

}


/* ==========================================
SCROLL REVEAL
========================================== */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});

/* ==========================================
FLOATING HEARTS
========================================== */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(18+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

}

setInterval(createHeart,1000);


/* ==========================================
SHOOTING STARS
========================================== */

function shootingStar(){

const star=document.createElement("div");

star.className="shooting-star";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top=Math.random()*250+"px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2000);

}

setInterval(shootingStar,3500);


/* ==========================================
BALLOONS
========================================== */

function balloon(){

const b=document.createElement("div");

b.innerHTML="🎈";

b.style.position="fixed";

b.style.bottom="-80px";

b.style.left=Math.random()*100+"vw";

b.style.fontSize=(35+Math.random()*25)+"px";

b.style.pointerEvents="none";

b.style.zIndex="5";

document.body.appendChild(b);

let y=-80;

const fly=setInterval(()=>{

y+=2;

b.style.bottom=y+"px";

if(y>window.innerHeight+100){

clearInterval(fly);

b.remove();

}

},30);

}

setInterval(balloon,5000);


/* ==========================================
CONFETTI
========================================== */

function createConfetti(){

for(let i=0;i<180;i++){

const conf=document.createElement("div");

conf.className="confetti";

conf.style.left=Math.random()*100+"vw";

conf.style.background=
`hsl(${Math.random()*360},100%,50%)`;

conf.style.animationDuration=
(2+Math.random()*4)+"s";

document.body.appendChild(conf);

setTimeout(()=>{

conf.remove();

},6000);

}

}


/* ==========================================
IMAGE LIGHTBOX
========================================== */

document.querySelectorAll(".gallery-card img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";

overlay.style.left="0";

overlay.style.top="0";

overlay.style.width="100%";

overlay.style.height="100%";

overlay.style.background="rgba(0,0,0,.92)";

overlay.style.display="flex";

overlay.style.alignItems="center";

overlay.style.justifyContent="center";

overlay.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="20px";

image.style.boxShadow="0 0 30px rgba(255,255,255,.3)";

overlay.appendChild(image);

overlay.onclick=()=>{

overlay.remove();

}

document.body.appendChild(overlay);

});

});

/* ==========================================
   CURSOR GLOW EFFECT
========================================== */

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "18px";
glow.style.height = "18px";
glow.style.borderRadius = "50%";
glow.style.background = "rgba(255,77,148,.5)";
glow.style.pointerEvents = "none";
glow.style.filter = "blur(10px)";
glow.style.zIndex = "9999";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX - 9 + "px";
    glow.style.top = e.clientY - 9 + "px";

});


/* ==========================================
   SECRET EASTER EGG
========================================== */

let footerClicks = 0;

const footer = document.querySelector("footer");

if (footer) {

    footer.addEventListener("click", () => {

        footerClicks++;

        if (footerClicks >= 5) {

            alert("🌸 Every beautiful memory deserves a smile. Happy Birthday once again, Srivalli ❤️");

            footerClicks = 0;

        }

    });

}


/* ==========================================
   AUTO GREETING
========================================== */

setTimeout(() => {

    console.log("🎂 Happy Birthday Srivalli ❤️");

}, 3000);


/* ==========================================
   SMOOTH SCROLL FOR LINKS
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ==========================================
   FINISHED
========================================== */

console.log("Website Loaded Successfully ❤️");
