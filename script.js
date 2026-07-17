// Loading Screen

setTimeout(() => {

    document.getElementById("loading").style.display = "none";

    document.getElementById("mainContent").classList.remove("hidden");

},3000);


// Surprise Button

const btn=document.getElementById("surpriseBtn");

btn.addEventListener("click",()=>{

    document.getElementById("surprise").classList.remove("hidden");

    document.getElementById("birthdayMusic").play();

    createConfetti();

});


// Simple Confetti

function createConfetti(){

    for(let i=0;i<150;i++){

        let confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.animationDuration=(Math.random()*3+2)+"s";

        confetti.style.backgroundColor=randomColor();

        document.body.appendChild(confetti);

        setTimeout(()=>{
            confetti.remove();
        },5000);

    }

}

function randomColor(){

    const colors=[
        "#ff4081",
        "#FFD700",
        "#00E5FF",
        "#7CFC00",
        "#FF5722",
        "#ffffff"
    ];

    return colors[Math.floor(Math.random()*colors.length)];

}



// Gallery Zoom

const images=document.querySelectorAll(".gallery img");

images.forEach(image=>{

image.addEventListener("click",()=>{

if(image.classList.contains("zoom")){

image.classList.remove("zoom");

}else{

document.querySelectorAll(".gallery img").forEach(img=>img.classList.remove("zoom"));

image.classList.add("zoom");

}

});

});


const gift=document.getElementById("giftBox");

gift.addEventListener("click",()=>{

gift.style.display="none";

document.getElementById("giftMessage").classList.remove("hidden");

});


const text="🎉 Happy Birthday Thikkala Rayudu ❤️";

let i=0;

function typing(){

    if(i<text.length){

        document.getElementById("typewriter").innerHTML+=text.charAt(i);

        i++;

        setTimeout(typing,90);

    }

}

typing();



const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

function random(min,max){

return Math.random()*(max-min)+min;

}

function firework(){

for(let i=0;i<80;i++){

ctx.beginPath();

ctx.arc(random(0,canvas.width),random(0,canvas.height),2,0,Math.PI*2);

ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;

ctx.fill();

}

}

setInterval(firework,800);
