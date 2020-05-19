//global variables

const playerResult = document.querySelector("#playerResult");
const computerResult = document.querySelector("#computerResult");
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const endGameResult = document.querySelector("#endGameResult");
const playerRock = document.querySelector('#rock');
const playerPaper = document.querySelector('#paper');
const playerScissors = document.querySelector('#scissors')
const computerRock = document.querySelector('#computerRock');
const computerPaper = document.querySelector('#computerPaper');
const computerScissors = document.querySelector('#computerScissors')
const middleDisplay = document.querySelector('.vs');

const newGameButton = document.createElement('button');
newGameButton.textContent = "New Game";
newGameButton.classList.add('playButton');

let selectedButton = document.querySelectorAll('.button');

let scorePlayer = 0;
let scoreComputer = 0;  
let roundNumber = 0;


//declare functions 

function computerPlay () {

    let optionsArray = ["Rock", "Paper", "Scissors"];
     return optionsArray[Math.floor(Math.random()*3)] 
}
function round (computerSelection, playerSelection) {

    let win = 0;
    let lose = 1;
    let draw = 2;

    if (computerSelection === playerSelection) {
        playerScore.textContent = scorePlayer;
        computerScore.textContent = scoreComputer;
        playerResult.textContent = "DRAW";
        computerResult.textContent = "DRAW";
        
        if (computerSelection === "Rock") {
            showSelectedOption(computerRock,playerRock);
        } else if (computerSelection === "Paper") {
            showSelectedOption(computerPaper,playerPaper);
        } else if (computerSelection === "Scissors") {
            showSelectedOption(computerScissors,playerScissors);
        }
        return draw;
    } else if (computerSelection === "Rock") {

        if (playerSelection === "Scissors") {
            showSelectedOption(computerRock,playerScissors);
            playerResult.textContent = 'LOSE';
            computerResult.textContent = 'WIN';
            scoreComputer+=1;
            roundNumber+=1;
            computerScore.textContent = scoreComputer;
            playerScore.textContent = scorePlayer;
        }

        if (playerSelection === "Paper") {
            showSelectedOption(computerRock,playerPaper);
            playerResult.textContent = 'WIN';
            computerResult.textContent = 'LOSE';
            scorePlayer+=1;
            roundNumber+=1;
            playerScore.textContent = scorePlayer;
            computerScore.textContent = scoreComputer;
        }
    } else if (computerSelection === "Paper") {
       
        if (playerSelection === "Rock") {
            showSelectedOption(computerPaper,playerRock);
            playerResult.textContent = 'LOSE';
            computerResult.textContent = 'WIN';
            scoreComputer+=1;
            roundNumber+=1;
            computerScore.textContent = scoreComputer;
            playerScore.textContent = scorePlayer;
        }

        if (playerSelection === "Scissors") {
            showSelectedOption(computerPaper,playerScissors);
            playerResult.textContent = 'WIN';
            computerResult.textContent = 'LOSE';
            scorePlayer+=1;
            roundNumber+=1;
            playerScore.textContent = scorePlayer;
            computerScore.textContent = scoreComputer;
        }
    } else if (computerSelection === "Scissors") {
       
        if (playerSelection === "Paper") {
            showSelectedOption(computerScissors,playerPaper);
            playerResult.textContent = 'LOSE';
            computerResult.textContent = 'WIN';
            scoreComputer+=1;
            roundNumber+=1;
            computerScore.textContent = scoreComputer;
            playerScore.textContent = scorePlayer;
        }

        if (playerSelection === "Rock") {
            showSelectedOption(computerScissors,playerRock);
            playerResult.textContent = 'WIN';
            computerResult.textContent = 'LOSE';
            scorePlayer+=1;
            roundNumber+=1;
            playerScore.textContent = scorePlayer;
            computerScore.textContent = scoreComputer;
        }
    } 

    if (scorePlayer === 5) {
        endGameResult.textContent = "YOU WIN!!!";
        playerResult.textContent = "WIN";
        computerResult.textContent = "LOSE";
        middleDisplay.appendChild(newGameButton);
        cancelGameButtons();
        
    } else if (scoreComputer === 5) {
        endGameResult.textContent = "COM WINS!!!";
        playerResult.textContent = "LOSE";
        computerResult.textContent = "WIN";
        middleDisplay.appendChild(newGameButton);
        cancelGameButtons();
    }
 
}




function newGame() {
    roundNumber = 0;
    scorePlayer = 0;
    scoreComputer = 0; 
    playerScore.textContent = scorePlayer;
    computerScore.textContent = scoreComputer;
    endGameResult.textContent = "VS";
    playerRock.onclick = () =>  round(computerPlay(),"Rock");
    playerPaper.onclick = () => round(computerPlay(),"Paper");
    playerScissors.onclick = () => round(computerPlay(), "Scissors");
    middleDisplay.removeChild(newGameButton);
    selectedButton.forEach((el) => el.classList.remove('selectedButton'));
}

function game () {
    
    if (scorePlayer < scoreComputer) {
        console.log("You Lose! Try again!"
        + " You: " + scorePlayer + " Computer: " + scoreComputer)
    } else {
        console.log("Congratulations! You win!"
        + " You: " + scorePlayer + " Computer: " + scoreComputer)
    }
}

function cancelGameButtons () {
    playerRock.onclick = () =>  null;
    playerPaper.onclick = () => null;
    playerScissors.onclick = () =>  null;
}

function showSelectedOption (player,computer) {
    selectedButton.forEach((el) => el.classList.remove('selectedButton'));
    player.classList.add('selectedButton');
    computer.classList.add('selectedButton');
}

//calls
playerRock.onclick = () =>  round(computerPlay(),"Rock");
playerPaper.onclick = () => round(computerPlay(),"Paper");
playerScissors.onclick = () => round(computerPlay(), "Scissors");
newGameButton.onclick = () => newGame();