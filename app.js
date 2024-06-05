let choices = ["ROCK", "PAPER", "SCISSORS"]

let humanScore = 0
let computerScore = 0
let round = 0

function getComputerChoice(){
    return choices[Math.floor(Math.random()* choices.length)]
}

function getHumanChoice(){
    return prompt("Type Rock, Paper or Scissors").toUpperCase() 
    
}



function playRound(humanChoice, computerChoice){

    switch (humanChoice+computerChoice){
        case "ROCKROCK":
        case "PAPERPAPER":
        case "SCISSORSSCISSORS":
            console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}.`)
            console.log(`Draw! Your score is ${humanScore}. Computer score is ${computerScore}.`)
            break;
        case "ROCKSCISSORS":
        case "PAPERROCK":
        case "SCISSORSPAPER":
            humanScore++
            console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}.`)
            console.log(`YOU WIN! Your score is ${humanScore}. Computer score is ${computerScore}.`)
            break;
        default:
            computerScore++
            console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}.`)
            console.log(`YOU LOSE! Your score is ${humanScore}. Computer score is ${computerScore}.`)
            break;
    }
}


function playGame(){
    for (let i = 0; i< 5; i++) {
        round ++
        console.log(`ROUND:${round}`)
        playRound(getHumanChoice(),getComputerChoice())
        
    }
}

playGame()

