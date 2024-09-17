const dynamic = document.getElementById("dynamic");
const border = document.getElementById("border");
const time = document.getElementById("time")

dynamic.onclick = function (){
  if(dynamic.onclick){
    border.style.backgroundImage = "URL(pexels-joshkjack-135018.jpg)"
    dynamic.style.height = "20px"
    dynamic.textContent = `Welcome`
    dynamic.style.textAlign = "center"
    dynamic.style.fontSize = "10px"
    document.body.style.color = "white"
    document.getElementById("showoff").style.display = "block"
    on.style.display = "none";
  }
}

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play")
const pauseBtn = document.getElementById("pause")

playBtn.addEventListener("click", function(){
  audio.play();
})
pauseBtn.addEventListener("click", () =>{
  audio.pause();
})

const on = document.getElementById("on")

on.onclick = function(){
  if(on.innerText === "on"){
    on.innerHTML = "off"
    border.style.boxShadow = "10px 10px 20px white"
  }
  else{
    on.innerHTML = "on"
    border.style.boxShadow = "10px 10px 20px black"
  }
}

time.onclick = function (){
  border.style.backgroundImage = "URL(pexels-vladalex94-1402787.jpg)"
  document.body.style.color = "white"
  document.getElementById("showoff").style.display = "none";
  on.style.display = "flex"
  document.getElementById("playlist").style.alignContent = "center"
}