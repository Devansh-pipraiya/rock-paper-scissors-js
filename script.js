function getBotChoice(){         // func to generate random choices of rock, paper, scissors(RPS)
 
    let choice = Math.floor(Math.random()*3);  // generates random number either 0, 1 or 2
    // console.log(choice);
    switch (choice){
        case 0 : return "rock";
        case 1 : return "paper";
        case 2 : return "scissors";
    }
}
console.log(getBotChoice());


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
console.log(getPlayerChoice());