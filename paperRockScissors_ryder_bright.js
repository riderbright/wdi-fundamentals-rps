function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Choose either paper, rock, or scissors");
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    console.log("SHOOT!");
    if ((move == "rock")||(move == "paper")||(move == "scissors")) {
        x = move;
    } else if (move === undefined) {
        x = getInput();
    }
    console.log("player move is " + x);
    return x;
}

function getComputerMove(move) {
    if (move) {
        y = move;
    } else if (move === undefined) {
        y = randomPlay();
    } 
    console.log("computer move is " + y);
    return y;
}

function getWinner(playerMove, computerMove) {
    var w;
    if (playerMove == computerMove) {
        w = "tie";
    } else if ((playerMove == "rock" && computerMove == "paper")||
               (playerMove == "paper" && computerMove == "scissors")||
               (playerMove == "scissors" && computerMove == "rock")) {
                   w = "computer wins";
               } else if ((computerMove == "rock" && playerMove == "paper")||
               (computerMove == "paper" && playerMove == "scissors")||
               (computerMove == "scissors" && playerMove == "rock")) {
                   w = "player wins";
    }  
    return w;  
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while((playerWins < 5)&&(computerWins < 5)){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        console.log(winner);
        if(winner == "player wins"){
            playerWins++;
        }else if(winner == "computer wins"){
            computerWins++;
        }
        
    }
    return [playerWins, computerWins];
}

