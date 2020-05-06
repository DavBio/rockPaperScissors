
//Escolha do computador
function computerPlay () {

    let optionsArray = ["Rock", "Paper", "Scissors"];
     return optionsArray[Math.floor(Math.random()*3)] 
}

//vvv

const roundResults = document.querySelector("#roundResults");
const gameResults = document.querySelector("#gameResults");
const gameResults2 = document.querySelector("#gameResults2");

let scorePlayer = 0;
let scoreComputer = 0;  
let roundNumber = 0;

   //vvvvv 
//Função de round
function round (computerSelection, playerSelection) {

    let win = 0;
    let lose = 1;
    let draw = 2;
    
    //playerPrompt = prompt("Play","Rock, Paper or Scissors?");

      //  if (playerPrompt === null) {
        //alert("Canceled")}

    //playerSelection = playerPrompt.slice(0,1).toUpperCase() + playerPrompt.slice(1).toLowerCase(); 

    if (playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors") {
    } else { alert("I'm sorry, i didn't understand.") }

    if (computerSelection === playerSelection) {
        
        roundResults.textContent = "Round result: " + computerSelection + " and " + playerSelection + " Makes a Draw! Play Again!";
        return draw;
    } else if (computerSelection === "Rock") {

        if (playerSelection === "Scissors") {
            
            roundResults.textContent = "Round result: You Lose! " + computerSelection + " beats " + playerSelection + ".";
            scoreComputer+=1;
            roundNumber+=1;
        }

        if (playerSelection === "Paper") {
            
            roundResults.textContent = "Round result: You Win! " + playerSelection + " beats " + computerSelection + ".";
            scorePlayer+=1;
            roundNumber+=1;
        }
    } else if (computerSelection === "Paper") {
       
        if (playerSelection === "Rock") {
            
            roundResults.textContent = "Round result: You Lose! " + computerSelection + " beats " + playerSelection + ".";
            scoreComputer+=1;
            roundNumber+=1;
        }

        if (playerSelection === "Scissors") {
            
            roundResults.textContent = "Round result: You Win! " + playerSelection + " beats " + computerSelection + ".";
            scorePlayer+=1;
            roundNumber+=1;
        }
    } else if (computerSelection === "Scissors") {
       
        if (playerSelection === "Paper") {
           
            roundResults.textContent = "Round result: You Lose! " + computerSelection + " beats " + playerSelection + ".";
            

            scoreComputer+=1;
            roundNumber+=1;
        }

        if (playerSelection === "Rock") {
            
            roundResults.textContent = "Round result: You Win! " + playerSelection + " beats " + computerSelection + ".";

            scorePlayer+=1;
            roundNumber+=1;
        }
    } 
    

    gameResults.textContent = `Round: ${roundNumber}`; 
    gameResults2.textContent = "You: " + scorePlayer + " vs Computer: " + scoreComputer + "."; 

    if (scorePlayer === 5) {
        gameResults.textContent = "YOU WIN!!!";
        gameResults2.textContent =  "You: 5 vs Computer: " + scoreComputer + ".";
        roundNumber = 0;
        scorePlayer = 0;
        scoreComputer = 0; 
    } else if (scoreComputer === 5) {
        gameResults.textContent = "YOU LOSE!!!";
        gameResults2.textContent =  "You: " + scorePlayer + " vs Computer: " + scoreComputer + ".";
        roundNumber = 0;
        scorePlayer = 0;
        scoreComputer = 0; 
    }
}

//jogo

function game () {

   

   /* for ( i = 0 ; i < 5 ; i++)
    {
        
        
        
        let result = round(computerPlay());
        if (result === 0 ) {
            console.log("round " + (i+1) + " :");

            scorePlayer+=1;
            console.log("You: " + scorePlayer + " Computer: " + scoreComputer );
        } else if (result === 1) {
            console.log("round " + (i+1) + " :");

            scoreComputer+=1;
            console.log("You: " + scorePlayer + " Computer: " + scoreComputer );
        } else {
            i--;
        }
       
    }*/
    
    if (scorePlayer < scoreComputer) {
        console.log("You Lose! Try again!"
        + " You: " + scorePlayer + " Computer: " + scoreComputer)
    } else {
        console.log("Congratulations! You win!"
        + " You: " + scorePlayer + " Computer: " + scoreComputer)
    }
}


const rockSelection = document.querySelector('button#rock');
const paperSelection = document.querySelector('#paper');
const scissorsSelection = document.querySelector('#scissors')

rockSelection.onclick = () =>  round(computerPlay(),"Rock");
paperSelection.onclick = () => round(computerPlay(),"Paper");
scissorsSelection.onclick = () => round(computerPlay(), "Scissors");