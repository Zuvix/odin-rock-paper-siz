const playChoices= ["rock","paper","scissors"]
function computerPlay(){
    let randomNum = Math.floor(Math.random()*(playChoices.length));
    return playChoices[randomNum];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection)
    {
        return `Tie. Player used ${playerSelection} and computer also used ${computerSelection}.`;
    }
    else if(computerSelection==="rock" && playerSelection==="scissors" || 
        computerSelection==="paper" && playerSelection==="rock" ||
        computerSelection==="scissors" && playerSelection==="paper")
    {
        return `Computer win. Player used ${playerSelection} but computer used ${computerSelection}.`;
    }
    else if(playerSelection === "rock" && computerSelection ==="scissors" || 
    playerSelection === "paper" && computerSelection ==="rock" ||
    playerSelection === "scissors" && computerSelection ==="paper")
    {
        return `Player win. Player used ${playerSelection} and Computer used ${computerSelection}.`
    }

    return "unexpected input";
}
   
function game(){
    for(let i=0;i<5;i++)
    {
        const playerSelection = prompt("What will you choose? (rock, paper, scissors)")
        const computerSelection= computerPlay();
        console.log(playRound(playerSelection, computerSelection)); 
    }
}
game();

