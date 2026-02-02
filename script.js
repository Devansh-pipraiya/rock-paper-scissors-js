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

    let input = prompt("enter your choice either rock or paper or scissors");
    choice = input.toLowerCase();    // takes input and converts to lowercase PapEr -> paper

    switch (choice){
        case "rock" : return "rock";
        case "paper" : return "paper";
        case "scissors" : return "scissors"
        default: return "enter valid value"
    }
}


let playerScore =0;
let botScore = 0;

function playRound( playerChoice , botChoice ){
    // console.log(playerChoice, botChoice);

    switch (playerChoice){
        case "rock":
            
            switch (botChoice){
                case "paper":
                    console.log("you lose");
                    botScore += 1;
                    console.log(playerScore, botScore)
                    break;
                case "scissors":
                    console.log("you win")
                    playerScore += 1;
                    console.log(playerScore, botScore)
                    break;
                case "rock":
                    console.log("tie")
                    console.log(playerScore, botScore)
                    break;
            }
            break;
        
        case "paper":

            switch (botChoice){
                case "scissors":
                    console.log("you lose");
                    botScore += 1;
                    console.log(playerScore, botScore)
                    break;
                case "rock":
                    console.log("you win")
                    playerScore += 1;
                    console.log(playerScore, botScore)
                    break;
                case "paper":
                    console.log("tie")
                    console.log(playerScore, botScore)
                    break;
            }
            break;   

        case "scissors":

            switch (botChoice){
                case "rock":
                    console.log("you lose");
                    botScore += 1;
                    console.log(playerScore, botScore)
                    break;
                case "paper":
                    console.log("you win")
                    playerScore += 1;
                    console.log(playerScore, botScore)
                    break;
                case "scissors":
                    console.log("tie")
                    console.log(playerScore, botScore)
                    break;
            }
            break;

        default: console.log("enter a valid value")
    }
}

let playerChoice = getPlayerChoice();
let botChoice = getBotChoice();
playRound(playerChoice, botChoice);