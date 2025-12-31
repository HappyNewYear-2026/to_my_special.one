const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

resize();
addEventListener("resize", resize);

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

/* 🎵 AUTO PLAY + UNMUTE */
const music = document.getElementById("bg-music");
window.addEventListener("load", () => {
  setTimeout(() => music.muted = false, 700);
});

/* ✨ STARS */
const stars = [], shootingStars = [];

class Star {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5;
    this.alpha = Math.random();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
    ctx.fill();
  }
}

class ShootingStar {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height * 0.4;
    this.length = Math.random() * 120 + 50;
    this.speed = Math.random() * 15 + 10;
    this.opacity = 1;
  }
  update() {
    this.x += this.speed;
    this.y += this.speed;
    this.opacity -= 0.02;
  }
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - this.length, this.y - this.length);
    ctx.strokeStyle = `rgba(255,255,255,${this.opacity})`;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 20;
    ctx.shadowColor = "white";
    ctx.stroke();
    ctx.shadowBlur = 0;
  }
}

for (let i = 0; i < 300; i++) stars.push(new Star());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => s.draw());
  if (Math.random() < 0.03) shootingStars.push(new ShootingStar());
  shootingStars.forEach((s, i) => {
    s.update(); s.draw();
    if (s.opacity <= 0) shootingStars.splice(i, 1);
  });
  requestAnimationFrame(animate);
}
animate();

/* ⌨ TYPING TEXT */
const title = " Happy New year ";
const msg = `
_________💝💖.🎂.💖💝_________
May this New Year bring you endless happiness ✨ Peace, love and success in your life 🌟
Keep smiling and stay alwways be Happy..☺️

Everyone have red flags but we need to find,
and work on own Green flags...👨🏻‍💻

Remember....................!
I'm always there for you.😉
For ever and ever and ever...♾️

infinite+ Best wishes
__________From the bottom of__________
 💖 My Heart 💖`;

let ti = 0, mi = 0;
const element = document.getElementById("title");

element.style.textShadow = '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #007bff, 0 0 20px #83a1b9ff';
element.style.color = '#06080aff'
const tEl = document.getElementById("title");
const mEl = document.getElementById("message");
const btn = document.querySelector(".open-btn");
const cap = document.querySelector(".santa-cap");

function typeTitle() {
  if (ti < title.length) {
    tEl.textContent += title[ti++];
    setTimeout(typeTitle, 80);
  } else {
    setTimeout(typeMsg, 400);
  }
}

function typeMsg() {
  if (mi < msg.length) {
    mEl.textContent += msg[mi++];
    setTimeout(typeMsg, 30);
  } else {
    setTimeout(() => {
      btn.classList.add("show");
      cap.classList.add("show");
    }, 500);
  }
}

typeTitle();

/* ❄ SNOW EFFECT */
const snowCanvas = document.getElementById("snow");
const sctx = snowCanvas.getContext("2d");

function resizeSnow() {
  snowCanvas.width = innerWidth;
  snowCanvas.height = innerHeight;
}
resizeSnow();
addEventListener("resize", resizeSnow);

const snowflakes = Array.from({ length: 120 }, () => ({
  x: Math.random() * innerWidth,
  y: Math.random() * innerHeight,
  r: Math.random() * 3 + 1,
  d: Math.random() + 0.5
}));

function snow() {
  sctx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);
  sctx.fillStyle = "rgba(255,255,255,0.9)";
  sctx.beginPath();

  snowflakes.forEach(f => {
    sctx.moveTo(f.x, f.y);
    sctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
  });

  sctx.fill();

  snowflakes.forEach(f => {
    f.y += f.d;
    if (f.y > innerHeight) {
      f.y = -10;
      f.x = Math.random() * innerWidth;
    }
  });

  requestAnimationFrame(snow);
}
snow();

function openSurprise() {
  window.location.href = "love/surprise.html";
}


