function getBotChoice(){         // func to generate random choices of rock, paper, scissors(RPS)
 
    let choice = Math.floor(Math.random()*3);  // generates random number either 0, 1 or 2
    // console.log(choice);
    switch (choice){
        case 0 : return "rock";
        case 1 : return "paper";
        case 2 : return "scissors";
    }
}


function getPlayerChoice(){      // func to get user choice of rock,paper,scissors and return a valid choice either rock, paper or scissors

    let input = prompt('Enter "Rock", "Paper" or "Scissors" 👊📃✂️  \n❗Case doesnt matter❗- 5 Rounds');
    choice = input.toLowerCase();    // takes input and converts to lowercase PapEr -> paper

    switch (choice){
        case "rock" : return "rock";
        case "paper" : return "paper";
        case "scissors" : return "scissors"
        default: return "⚠️ Enter a valid value: Rock Paper or Scissors ⚠️"
    }
}


let playerScore =0;
let botScore = 0;

function playRound( playerChoice , botChoice ){    // Game logic and score update from rules of rock, paper and scissors

    switch (playerChoice){
        case "rock":
            
            switch (botChoice){
                case "paper":
                    console.log("------------- ❌ You Lose - Paper beats Rock ❌ ---------");
                    console.log("__________________________________________________________");
                    botScore += 1;
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    
                    break;
                case "scissors":
                    console.log("------------ ✅ You Won - Rock beats Scissors ✅ ---------");
                    console.log("___________________________________________________________");
                    playerScore += 1;
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    
                    break;
                case "rock":
                    console.log("------------- 🟰 Tie - Rock is Rock 🟰 ------------")
                    console.log("___________________________________________________________");
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    
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
                    break;
                case "rock":
                    console.log("------------- ✅ You Won - Paper beats Rock ✅ ----------");
                    console.log("__________________________________________________________");
                    playerScore += 1;
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    break;
                case "paper":
                    console.log("------------- 🟰 Tie - Paper is Paper 🟰 ------------");
                    console.log("__________________________________________________________");
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
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
                    break;
                case "paper":
                    console.log("------------ ✅ You Won - Scissor beats Paper ✅ --------");
                    console.log("__________________________________________________________");
                    playerScore += 1;
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore)
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    break;
                case "scissors":
                    console.log("-------------- 🟰 Tie - Scissor beats Scissor 🟰 --------");
                    console.log("__________________________________________________________");
                    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore);
                    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
                    break;
            }
            break;

        default: console.log("⚠️ Enter a valid value: Rock, 'Paper or Scissors ⚠️")
    }
}


function playGame(){      // main func to play the game which calls all other functions

    console.log("╰( ◕ ᗜ ◕ )╯_____🎌 Game Started 🎌_____(◕‿◕)♡")
    console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");


    for (let i=0; i<5; i++){      // To Run the round 5 times with new random choice for each round
        let playerChoice = getPlayerChoice();
        let botChoice = getBotChoice();
        playRound(playerChoice, botChoice);
    }


    console.log("🏁🏁🏁🏁🏁🏁🏁🏁🏅 Final Result 🏅🏁🏁🏁🏁🏁🏁🏁🏁")

    if (playerScore > botScore) {
        console.log("🏆_______________✅ 🏆 YOU WON 🏆 ✅_______________🏆");}
    else if (playerScore < botScore) {
        console.log("🏆_______________❌ 🏆 BOT WON 🏆 ❌_______________🏆");}
    else {
        console.log("🏆_______________🟰 🏆 ITS A TIE 🏆 🟰_______________🏆");}

    console.log("👤 Your Score:", playerScore, "|||||||| 🤖 Bot Score: " , botScore);

}
playGame();  // calling the function to run the game