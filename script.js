function getBotChoice(){         // returns random choices of rock, paper or scissors(RPS)

    let choice = Math.floor(Math.random()*3);  // returns random number either 0, 1 or 2
    switch (choice){
        case 0 : return "rock";
        case 1 : return "paper";
        case 2 : return "scissors";
    }
}

let playerScore = 0;
let botScore = 0;
let NumberOfRound = 0;


function playRound( playerChoice , botChoice ){    // Main game logic and also update & show score based on RPS rules

    switch (playerChoice){                         // This game was originally designed as a console-based version.
        case "rock":                               // The styled console output is intentionally preserved to maintain
                                                   // the original console experience alongside UI.
            switch (botChoice){
                case "paper":
                    console.log("------------ ❌ You Lose - Paper beats Rock ❌ --------");  
                    console.log("________________________________________________________");
                    botScore += 1;
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="You Lose!"
                    h2.textContent="Paper beats Rock";
                    
                    break;
                case "scissors":
                    console.log("----------- ✅ You Won - Rock beats Scissors ✅ --------");
                    console.log("_________________________________________________________");
                    playerScore += 1;
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="You Won!"
                    h2.textContent="Rock beats Scissors";
                    
                    break;
                case "rock":
                    console.log("------------ 🟰 Tie - Rock is Rock 🟰 -----------")
                    console.log("_________________________________________________________");
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="It's a tie!";
                    h2.textContent="Rock is Rock";
                    
                    break;
            }
            break;
        
        case "paper":

            switch (botChoice){
                case "scissors":
                    console.log("----------- ❌ You Lose - Scissor beats Paper ❌ -------");
                    console.log("_________________________________________________________");
                    botScore += 1;
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="You Lose!"
                    h2.textContent="Scissor beats Paper";

                    break;
                case "rock":
                    console.log("------------ ✅ You Won - Paper beats Rock ✅ ---------");
                    console.log("________________________________________________________");
                    playerScore += 1;
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="You Won!"
                    h2.textContent="Paper beats Rock";

                    break;
                case "paper":
                    console.log("------------ 🟰 Tie - Paper is Paper 🟰 -----------");
                    console.log("________________________________________________________");
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="It's a tie!";
                    h2.textContent="Paper is Paper";

                    break;
            }
            break;   

        case "scissors":

            switch (botChoice){
                case "rock":
                    console.log("----------- ❌ You Lose - Rock beats Scissor ❌ -------");
                    console.log("________________________________________________________");
                    botScore += 1;
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="You Lose!"
                    h2.textContent="Rock beats Scissor";

                    break;
                case "paper":
                    console.log("----------- ✅ You Won - Scissor beats Paper ✅ -------");
                    console.log("________________________________________________________");
                    playerScore += 1;
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="You Won!"
                    h2.textContent="Scissor beats Paper";

                    break;
                case "scissors":
                    console.log("------------- 🟰 Tie - Scissor beats Scissor 🟰 -------");
                    console.log("________________________________________________________");
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore);
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="It's a tie!";
                    h2.textContent="Scissor beats Scissor";

                    break;
            }
            break;
        default: console.log("⚠️ Enter a valid value: Rock, 'Paper or Scissors ⚠️")
    }
}


function playGame(){      // Plays the game and calls all other functions

    let botChoice = getBotChoice();
    playRound(playerChoice, botChoice);
    
    NumberOfRound++;
    if (NumberOfRound == 5){
    
        if (playerScore > botScore) {alert("You Won")}
        else if (playerScore < botScore) {alert("You lose")}
        else {alert("its a tie")}

        NumberOfRound = 0;
        playerScore = 0;
        botScore = 0;
    }
}
  

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const showPlayerScore = document.querySelector("#player-score");
const showBotScore = document.querySelector("#bot-score");


const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (e)=>{

    if (e.target.classList.contains("scissors") == true){playerChoice = "scissors"}
    else if (e.target.classList.contains("paper") == true){playerChoice = "paper"}
    else playerChoice ="rock";

    playGame();     // calling the function to run the game
    showPlayerScore.textContent= `Player: ${playerScore}`;
    showBotScore.textContent = `bot: ${botScore}`;

})




// old way to get player choice and return a valid value of either 'rock', 'paper' or 'scissors using prompt()
// ------------------------------------------------------------------------------------------------------------
// function getPlayerChoice(){      
//     let input = prompt('Enter "Rock", "Paper" or "Scissors" \n❗Case doesnt matter❗- 5 Rounds');
//     choice = input.toLowerCase();    
//     switch (choice){
//         case "rock" : return "rock";
//         case "paper" : return "paper";
//         case "scissors" : return "scissors"
//         default: return "⚠️ Enter a valid value: Rock Paper or Scissors ⚠️"
//     }
// }