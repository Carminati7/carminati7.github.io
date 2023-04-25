const basePath = "sounds"
const extension = ".wav"
const soundFiles =[
    {key:"g",name:"boom"},
    {key:"a",name:"clap"},
    {key:"s",name:"hihat"},
    {key:"d",name:"kick"},
    {key:"f",name:"openhat"},
    {key:"h",name:"ride"},
    {key:"j",name:"snare"},
    {key:"l",name:"tink"},
    {key:"k",name:"tom"}
]

function buttonPressed(event){
    let found = soundFiles.find( soundFile => soundFile.key == event.key )
    if(!found) return
    new Audio(`${basePath}/${found.name}${extension}`).play();
    let keyButton = document.querySelector("#"+event.key);
    keyButton.classList.add("playing")
}

function endTransition(event){
    event.target.classList.remove("playing")
}

function initTransitionEnd(soundKey){
    console.log(soundKey)
    let keyButton = document.querySelector("#"+soundKey.key);
    keyButton.addEventListener("transitionend", endTransition);
}

document.addEventListener("keydown", buttonPressed)
soundFiles.forEach(initTransitionEnd)
