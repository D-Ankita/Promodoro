import Promodoro from "./components/promodoro.js";

const rootContainer =  document.getElementById("root")!;
const img = document.createElement("img");
const navigationBar = document.createElement("div");
const promodoroBtn = document.createElement("button");
const shortbreakBtn = document.createElement("button");
const longBreakBtn = document.createElement("button");
const container = document.createElement("div");

//id

console.log("In appts");

//class
img.src = "./images/logo-removebg-preview.svg";
img.classList.add("logo-icon");
container.classList.add("container");
navigationBar.classList.add("navigationBar")
console.log(img);

promodoroBtn.innerText ="PromoDoro";
shortbreakBtn.innerText = "ShortBreak";
longBreakBtn.innerText = "LongBreak";

promodoroBtn.onclick=()=>{
    container.innerHTML = ""
    var promodoro =  new Promodoro(25,"PROMODORO");
    promodoro.mount(container)
}
shortbreakBtn.onclick=()=>{
    container.innerHTML = ""
    var promodoro =  new Promodoro(5,"SHORT- BREAK");
    promodoro.mount(container)
}
longBreakBtn.onclick=()=>{
    container.innerHTML = ""
    var promodoro =  new Promodoro(10,"LONG-BREAK");
    promodoro.mount(container)
}
navigationBar.appendChild(promodoroBtn);
navigationBar.appendChild(shortbreakBtn);
navigationBar.appendChild(longBreakBtn);
rootContainer.appendChild(img);
rootContainer.appendChild(navigationBar);
rootContainer.appendChild(container);

// var promodoro =  new Promodoro(25);
// promodoro.mount(rootContainer)