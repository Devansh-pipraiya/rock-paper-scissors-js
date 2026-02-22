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

function playRound( playerChoice , botChoice ){    // Main game logic and also update & show score based on RPS rules

    switch (playerChoice){
        case "rock":
            
            switch (botChoice){
                case "paper":
                    console.log("------------- ❌ You Lose - Paper beats Rock ❌ ---------");
                    console.log("__________________________________________________________");
                    botScore += 1;
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="You Lose!"
                    h2.textContent="Paper beats Rock";
                    
                    break;
                case "scissors":
                    console.log("------------ ✅ You Won - Rock beats Scissors ✅ ---------");
                    console.log("___________________________________________________________");
                    playerScore += 1;
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="You Won!"
                    h2.textContent="Rock beats Scissors";
                    
                    break;
                case "rock":
                    console.log("------------- 🟰 Tie - Rock is Rock 🟰 ------------")
                    console.log("___________________________________________________________");
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="It's a tie!";
                    h2.textContent="Rock is Rock";
                    
                    break;
            }
            break;
        
        case "paper":

            switch (botChoice){
                case "scissors":
                    console.log("------------ ❌ You Lose - Scissor beats Paper ❌ --------");
                    console.log("___________________________________________________________");
                    botScore += 1;
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="You Lose!"
                    h2.textContent="Scissor beats Paper";

                    break;
                case "rock":
                    console.log("------------- ✅ You Won - Paper beats Rock ✅ ----------");
                    console.log("__________________________________________________________");
                    playerScore += 1;
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="You Won!"
                    h2.textContent="Paper beats Rock";

                    break;
                case "paper":
                    console.log("------------- 🟰 Tie - Paper is Paper 🟰 ------------");
                    console.log("__________________________________________________________");
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="It's a tie!";
                    h2.textContent="Paper is Paper";

                    break;
            }
            break;   

        case "scissors":

            switch (botChoice){
                case "rock":
                    console.log("------------ ❌ You Lose - Rock beats Scissor ❌ --------");
                    console.log("__________________________________________________________");
                    botScore += 1;
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="You Lose!"
                    h2.textContent="Rock beats Scissor";

                    break;
                case "paper":
                    console.log("------------ ✅ You Won - Scissor beats Paper ✅ --------");
                    console.log("__________________________________________________________");
                    playerScore += 1;
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="You Won!"
                    h2.textContent="Scissor beats Paper";

                    break;
                case "scissors":
                    console.log("-------------- 🟰 Tie - Scissor beats Scissor 🟰 --------");
                    console.log("__________________________________________________________");
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore);
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    h1.textContent="It's a tie!";
                    h2.textContent="Scissor beats Scissor";

                    break;
            }
            break;

        default: console.log("⚠️ Enter a valid value: Rock, 'Paper or Scissors ⚠️")
    }
}


function playGame(){      // Plays the game and calls all other functions

    // console.log("╰( ◕ ᗜ ◕ )╯_____🎌 Game Started 🎌_____(◕‿◕)♡")
    // console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");


    // for (let i=0; i<5; i++){      // To Run the round 5 times with new random choice for each round
    //     let playerChoice = getPlayerChoice();
    //     let botChoice = getBotChoice();
    //     playRound(playerChoice, botChoice);
    // }


    // console.log("🏁🏁🏁🏁🏁🏁🏁🏁🏅 Final Result 🏅🏁🏁🏁🏁🏁🏁🏁🏁")

    // if (playerScore > botScore) {
    //     console.log("🏆_______________✅ 🏆 YOU WON 🏆 ✅_______________🏆");}
    // else if (playerScore < botScore) {
    //     console.log("🏆_______________❌ 🏆 BOT WON 🏆 ❌_______________🏆");}
    // else {
    //     console.log("🏆_______________🟰 🏆 ITS A TIE 🏆 🟰_______________🏆");}

    // console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore);


    // let playerChoice = getPlayerChoice();      // old way to get player input
    let botChoice = getBotChoice();
    playRound(playerChoice, botChoice);
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


// old way to get user choice and return a valid value of either 'rock', 'paper' or 'scissors
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