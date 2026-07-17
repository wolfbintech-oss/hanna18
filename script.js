/* ===================================
   Rosevier Birthday Experience
   script.js
=================================== */

const intro = document.getElementById("intro");
const giftScreen = document.getElementById("giftScreen");
const birthdayCard = document.getElementById("birthdayCard");
const wishOverlay = document.getElementById("wishOverlay");

const startBtn = document.getElementById("startBtn");
const gift = document.getElementById("gift");
const musicBtn = document.getElementById("musicBtn");
const wishBtn = document.getElementById("wishBtn");
const closeWish = document.getElementById("closeWish");

const music = document.getElementById("birthdayMusic");

const typedMessage = document.getElementById("typedMessage");

let musicPlaying = false;

/* ==========================
   START
========================== */

startBtn.onclick = () => {

    intro.classList.add("hidden");

    giftScreen.classList.remove("hidden");

}

/* ==========================
   OPEN GIFT
========================== */

gift.onclick = () => {

    gift.style.transform = "scale(1.3) rotate(15deg)";

    setTimeout(() => {

        giftScreen.classList.add("hidden");

        birthdayCard.classList.remove("hidden");

        launchCelebration();

        typeLetter();

    },800);

}

/* ==========================
   CONFETTI + FIREWORKS
========================== */

function launchCelebration(){

    confetti({
        particleCount:250,
        spread:180,
        origin:{y:.6}
    });

    setInterval(()=>{

        confetti({
            particleCount:8,
            angle:60,
            spread:60,
            origin:{x:0}
        });

        confetti({
            particleCount:8,
            angle:120,
            spread:60,
            origin:{x:1}
        });

    },2200);

}

/* ==========================
   TYPEWRITER
========================== */

const letter = `

Dear Hanna,

Today marks a beautiful milestone in your life.

May your 18th birthday bring endless joy,
wonderful adventures,
good health,
success,
and dreams that come true.

Never stop believing in yourself.

You are capable of amazing things,
and this is only the beginning of your wonderful journey.

May every flower remind you
that beautiful things bloom in their own perfect time.

Happy 18th Birthday!

🌸❤️🎉

`;

function typeLetter(){

    let i=0;

    typedMessage.innerHTML="";

    const timer = setInterval(()=>{

        typedMessage.innerHTML += letter.charAt(i);

        i++;

        if(i>=letter.length){

            clearInterval(timer);

        }

    },35);

}

/* ==========================
   MUSIC
========================== */

musicBtn.onclick=()=>{

    if(!musicPlaying){

        music.play();

        musicBtn.innerHTML="⏸ Pause Music";

        musicPlaying=true;

    }else{

        music.pause();

        musicBtn.innerHTML="🎵 Play Music";

        musicPlaying=false;

    }

}

/* ==========================
   MAKE A WISH
========================== */

wishBtn.onclick=()=>{

    wishOverlay.classList.remove("hidden");

    confetti({

        particleCount:300,

        spread:220,

        origin:{y:.7}

    });

}

closeWish.onclick=()=>{

    wishOverlay.classList.add("hidden");

}

/* ==========================
   FLOATING PETALS
========================== */

const petals=document.getElementById("petals");

function createPetal(){

    const petal=document.createElement("div");

    petal.innerHTML="🌸";

    petal.style.position="absolute";

    petal.style.left=Math.random()*100+"vw";

    petal.style.top="-50px";

    petal.style.fontSize=(18+Math.random()*20)+"px";

    petal.style.opacity=.8;

    petal.style.animation="fall "+(6+Math.random()*6)+"s linear";

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,500);

/* ==========================
   SPARKLES
========================== */

const sparkles=document.getElementById("sparkles");

function sparkle(){

    const s=document.createElement("div");

    s.innerHTML="✨";

    s.style.position="absolute";

    s.style.left=Math.random()*100+"vw";

    s.style.top=Math.random()*100+"vh";

    s.style.fontSize=(10+Math.random()*15)+"px";

    s.style.opacity=.7;

    s.style.transition="1.5s";

    sparkles.appendChild(s);

    setTimeout(()=>{

        s.style.opacity=0;

    },800);

    setTimeout(()=>{

        s.remove();

    },1800);

}

setInterval(sparkle,400);

/* ==========================
   FALL ANIMATION
========================== */

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-50px) rotate(0deg);

}

100%{

transform:translateY(120vh) translateX(100px) rotate(360deg);

}

}

`;

document.head.appendChild(style);
