// ==============================
// GAMEPULSE V3
// ==============================

// Smooth reveal animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(".game-card,.news-card,.trend-card,.section-title").forEach(el=>{
el.classList.add("hidden");
observer.observe(el);
});

// Sticky Header Glow

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.boxShadow="0 0 25px rgba(0,229,255,.35)";
header.style.background="rgba(8,12,22,.95)";

}else{

header.style.boxShadow="none";
header.style.background="rgba(8,12,22,.82)";

}

});

// Hero Title Glow

const title=document.querySelector(".hero h1");

let glow=true;

setInterval(()=>{

if(!title) return;

if(glow){

title.style.textShadow="0 0 15px #00e5ff,0 0 35px #00e5ff,0 0 70px #00e5ff";

}else{

title.style.textShadow="0 0 8px #00e5ff,0 0 18px #00e5ff";

}

glow=!glow;

},1200);

// Search

const search=document.querySelector(".search");

if(search){

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

document.querySelectorAll(".game-card").forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

  }
// ==============================
// Mobile Menu
// ==============================

const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    window.addEventListener("scroll", () => {
        navbar.classList.remove("active");
    });
}
/* HERO SLIDER */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

if(slides.length){

setInterval(()=>{

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

slides[currentSlide].classList.add("active");

},5000);

}
/* LOADER */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").classList.add("hide");

},2000);

});
// GTA VI Countdown

const releaseDate = new Date("May 26, 2026 00:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = releaseDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

},1000);
