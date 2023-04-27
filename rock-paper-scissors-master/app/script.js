let choices = {
    "rock":"/images/icon-rock.svg",
    "paper":"/images/icon-paper.svg",
    "scissors":"/images/icon-scissors.svg"
}
let aiChoice = [
     "/images/icon-rock.svg",
     "/images/icon-paper.svg",
     "/images/icon-scissors.svg"    
]
let pcChoice = ["rock" , "paper" , "scissors"]

const buttons = document.querySelectorAll('.items-bg')
const scoreEl = document.getElementById("score")
let items = document.querySelector(".options")
let selection = document.querySelector(".selection")
let score = 0
let userChoice = undefined
let userPicked = document.getElementById("userpicked")
let computerChoice = document.getElementById("computer")
const playAgain = document.getElementById("reset")
let result = document.getElementById("result")
const selector = document.querySelector(".selected")
const paperBtn = document.querySelector(".paper")
const rules = document.querySelector(".rules")
const rulesBtn = document.getElementById("rules-btn")
const rulesModal = document.querySelector(".rules-modal")


buttons.forEach((button) => {
    button.addEventListener("click" , ()=>{
        userChoice = button.getAttribute("data-choice")
        items.style.display = "none";
        selection.style.display = "flex";
        userPicked.src = choices[userChoice.toString()]
        computerChoice.src = aiChoice[randomChoice()]
        let computerChoiceSrc
        computerChoiceSrc = computerChoice.src

  setTimeout( () =>{

   
  
 if(userChoice === "scissors" && computerChoice.src == "http://127.0.0.1:5500/images/icon-paper.svg"){
    result.textContent = "YOU WON"
    score += 1
    scoreEl.textContent = score
    buttons.classList.add("scissor");

 } else if(userChoice === "paper" && computerChoice.src == "http://127.0.0.1:5500/images/icon-rock.svg"){
    result.textContent = "YOU WON"
    score += 1
    scoreEl.textContent = score
    buttons.classList.add("paper");

 }else if(userChoice === "rock" && computerChoice.src == "http://127.0.0.1:5500/images/icon-scissors.svg"){
    result.textContent = "YOU WON"
    score += 1
    scoreEl.textContent = score
    buttons.classList.add("rock");

 } else if(userChoice === "scissors" && computerChoice.src == "http://127.0.0.1:5500/images/icon-rock.svg"){
    result.textContent = "YOU LOST"
    score -= 1
    scoreEl.textContent = score
    buttons.classList.add("scissor");

 } else if(userChoice === "paper" && computerChoice.src == "http://127.0.0.1:5500/images/icon-scissors.svg"){
    result.textContent = "YOU LOST"
    score -= 1
    scoreEl.textContent = score
    buttons.classList.add("paper")

 } else if(userChoice === "rock" && computerChoice.src == "http://127.0.0.1:5500/images/icon-paper.svg"){
    result.textContent = "YOU LOST"
    score -= 1
    scoreEl.textContent = score
    buttons.classList.add("rock");
 }else {(userChoice === "rock" && computerChoice =="http://127.0.0.1:5500/images/icon-rock.svg" ||
 userChoice === "paper" && computerChoice =="http://127.0.0.1:5500/images/icon-paper.svg"||
 userChoice === "scissors" && computerChoice =="http://127.0.0.1:5500/images/icon-scissors.svg")
    result.textContent = "IT'S  A DRAW"
 }
}, 1200)
        
    })
}) 


reset.addEventListener("click", function(){
    items.style.display = "flex";
    selection.style.display = "none";   

})

rules.addEventListener("click", function(){
    rulesModal.style.display = "grid";

})
rulesBtn.addEventListener("click", function(){
    rulesModal.style.display = "none";

})

 
function randomChoice(){
    return [Math.floor(Math.random()*aiChoice.length)]
    
}

/* function updateScore(){
    scoreEl.innerText = score
} */



/* if (computerChoice === userChoice){
    result.textContent = "DRAW"


} else if ((computerChoice ==="paper" && userChoice === "scissors") || 
(computerChoice ==="rock" && userChoice ==="paper") ||
(computerChoice==="scissors" && userChoice ==="rock"))
{
    //you won
    score = 1
    scoreEl.textContent = score
    result.textContent = "WON"
} else { 
    //you lost
    score = -1
    scoreEl.textContent = score
    result.textContent = "LOST"
   
}*/  