let wards = [
  "javascript",
  "developer",
  "coding",
  "frontend",
  "website",
  "browser",
  "computer",
  "program",
  "script",
  "design",
  "html",
  "css",
  "react",
  "node",
  "function",
  "variable",
  "array",
  "object",
  "string",
  "boolean",
  "async",
  "await",
  "promise",
  "syntax",
  "error",
  "debug",
  "framework",
  "library",
  "server",
  "client",
  "database",
  "query",
  "endpoint",
  "api",
  "json",
  "git",
  "github",
  "terminal",
  "command",
  "deploy",
  "hosting",
  "domain",
  "network",
  "protocol",
  "security",
  "auth",
  "token",
  "cookie",
  "session",
  "storage",
  "mobile",
  "responsive",
  "layout",
  "grid",
  "flexbox",
  "animation",
  "transition",
  "element",
  "selector",
  "event",
  "listener",
  "callback",
  "closure",
  "scope",
  "module",
  "import",
  "export",
  "package",
  "manager",
  "npm",
  "webpack",
  "vite",
  "plugin",
  "extension",
  "editor",
  "vscode",
  "workspace",
  "project",
  "portfolio",
  "application",
  "software",
  "hardware",
  "algorithm",
  "structure",
  "pointer",
  "memory",
  "process",
  "thread",
  "binary",
  "integer",
  "float",
  "decimal",
  "matrix",
  "vector",
  "loop",
  "condition",
  "statement",
  "operator",
  "parameter",
  "argument",
  "return",
];
onload = () => soundMain.play();
// تغير لون الخفية
let theme = document.querySelector(".switch input");
let body = document.querySelector("body");
let word = document.querySelector(".word");
theme.addEventListener("change", () => {
  if (theme.checked) {
    body.classList.add("dark");
    word.classList.add("darkFont");
    input.classList.add("custom");
    input.classList.add("darkFont");
    start.classList.add("darkFont");
    reset.classList.add("darkFont");
  } else {
    body.classList.remove("dark");
    word.classList.remove("darkFont");
    input.classList.remove("custom");
    input.classList.remove("darkFont");
    start.classList.remove("darkFont");
    reset.classList.remove("darkFont");
  }
});

// زرار ريستارات لصفحه
let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  window.location.reload();
});

// بيكون كمه من الكلمات العشوائية ويظهرا وبيتم استدعاء الخاصيه عن بدء اللعبه
let wordEl = document.querySelector(".letter");
function setWord() {
  let random = Math.floor(Math.random() * wards.length);
  wordEl.textContent = wards[random];
}

//بدء الموقت
let time = document.querySelector(".time");
let timer = null;
let timeLeft = 5;
function startTimer() {
  clearInterval(timer);
  timeLeft = 5;
  time.textContent = timeLeft;

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      time.textContent = timeLeft;
    } else {
      clearInterval(timer);
      input.value = "";
      input.setAttribute("placeholder", "Game Over");
      input.setAttribute("disabled", "true");
      Swal.fire({
  title: "opss!",
  text: "Im sorry you lost.",
  imageUrl: "/images.jpg",
  imageWidth: 400,
  imageHeight: 400,
  imageAlt: "Custom image"
});
let butAlart = document.querySelector(".swal2-confirm");
  butAlart.addEventListener("click", () => {
  sountWrong.pause();
  sountWrong.currentTime = 0;
  });
  sountWrong.play();
      getdata();
    }
  }, 1000);
}

// دء اللعبه بالضصغط على زرار البدء
let start = document.querySelector(".start");
let input = document.querySelector("#input");
let score = document.querySelector(".score");
let wordsCount = document.querySelector(".wordsCount");
start.addEventListener("click", () => {
  input.removeAttribute("placeholder");
  input.removeAttribute("disabled");
  input.focus();
  input.value = "";
  score.textContent = 0;
  wordsCount.textContent = 0;

  setWord();
  startTimer();
});
// التاكد اذا كانت الكلمه صح واعادة تشغيل الموقت
let sountCorrect = new Audio("/dragon-studio-correct-472358.mp3");
let sountWrong = new Audio("/tikcdn_beubagah_com_a8f95c36_5f8a_482b_9369_14e5f99d4f38.mp3");
let soundWin = new Audio("/tikcdn_beubagah_com_ef2030a5_db17_43a6_8bfe_074cc7cc54fb.mp3");
let soundMain = new Audio("/mainsound.mp3");
input.addEventListener("input", () => {
  if (input.value.toLowerCase().trim() == wordEl.textContent) {
    score.textContent = Number(score.textContent) + 100;
    let currentWords = Number(wordsCount.textContent) + 1;
    wordsCount.textContent = currentWords;
    input.value = "";
    sountCorrect.play();
    if (currentWords == 100) {
      clearInterval(timer);
      input.setAttribute("placeholder", "You Win");
      input.setAttribute("disabled", "true");
      Swal.fire({
        title: "congratulations 🎉🎉🎉 You Win the game",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
        backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `,
      });
      getdata();
      return;
    }
    setWord();
    startTimer();
  }
});

let scoredash = document.querySelector(".scoreDash");
let wordsdash = document.querySelector(".wordsDash");
let timedash = document.querySelector(".timedash");
let dash = document.querySelector(".dash");
const date = new Date();
if (localStorage.getItem("data")) {
  render();
}
function getdata() {
  let info = {
    score: score.textContent,
    wordsCount: wordsCount.textContent,
    date: date.toJSON().slice(11, 16) + " " + date.toJSON().slice(0, 10),
  };
  let package = JSON.parse(localStorage.getItem("data")) || [];
  package.push(info);
  localStorage.setItem("data", JSON.stringify(package));
  render();
}
function render() {
  let dataArray = JSON.parse(localStorage.getItem("data"));

  dash.innerHTML = `<div class="leaderBoard">
        <div class="slice">
          <span class="id">#</span>
        </div>
        <div class="slice scoreDash">
          <span>Score</span>
        </div>
        <div class="slice wordsDash">
          <span>Words</span>
        </div>
        <div class="slice timedash">
          <span>Date</span>
        </div>
      </div>`;
  if (input.hasAttribute("disabled")) {
    for (let i = 0; i < dataArray.length; i++) {
      let id = `0${i + 1}`;
      let dashScore = dataArray[i].score;
      let dashWords = dataArray[i].wordsCount;
      let dashTime = dataArray[i].date;

      let div = document.createElement("div");
      let sliceOne = document.createElement("div");
      let spanOne = document.createElement("span");

      div.classList.add("leaderBoard");
      sliceOne.classList.add("slice");
      spanOne.classList.add("id");

      spanOne.textContent = id;
      sliceOne.appendChild(spanOne);
      div.appendChild(sliceOne);
      dash.appendChild(div);

      let sliceTwo = document.createElement("div");
      let spanTwo = document.createElement("span");
      sliceTwo.classList.add("scoreDash");
      sliceTwo.classList.add("slice");

      spanTwo.textContent = dashScore;

      sliceTwo.appendChild(spanTwo);
      div.appendChild(sliceTwo);

      let sliceThree = document.createElement("div");
      let spanThree = document.createElement("span");
      sliceThree.classList.add("wordsDash");
      sliceThree.classList.add("slice");

      spanThree.textContent = dashWords;

      sliceThree.appendChild(spanThree);
      div.appendChild(sliceThree);

      let sliceFour = document.createElement("div");
      let spanFour = document.createElement("span");
      sliceFour.classList.add("timedash");
      sliceFour.classList.add("slice");

      spanFour.textContent = dashTime;

      sliceFour.appendChild(spanFour);
      div.appendChild(sliceFour);
    }
  }
}
