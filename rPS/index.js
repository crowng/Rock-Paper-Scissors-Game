let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const active = document.querySelector('.choice');

function changeChoice(userChoice, computerChoice) {
    if (userChoice || computerChoice === 'r') {
        userChoice = 'Rock'
    } 
    if (userChoice || computerChoice === 'p') {
        userChoice = 'Paper'
    } 
    if (userChoice || computerChoice === 's') {
        userChoice = 'Scissors'
    } 
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}
function resetGame() {
    userScore = 0;
    computerScore = 0;
    result_p.innerHTML = `New Game!`;
    updateDisplay();
}

function updateDisplay() {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function win(userChoice, computerChoice) {
    userScore += 1;
    updateDisplay();
    changeChoice(userChoice, computerChoice);
    result_p.innerHTML = `${userChoice} beats ${computerChoice}`
}

function lose(userChoice, computerChoice) {
    computerScore += 1;
    updateDisplay();0
    result_p.innerHTML = `${changeChoice(computerChoice)} beats ${changeChoice(userChoice)},`
}

function draw() {
    result_p.innerHTML = `DRAW! Try Again`
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
        break;
        case 'rr':
        case 'ss':
        case 'pp':
            draw(userChoice, computerChoice);
        break;

        
    }

    if(userScore === 5){
        resetGame();
        result_p.innerHTML = `Player wins!!`
    }
    if (computerScore === 5){
        resetGame();
        result_p.innerHTML = `Computer Wins`
    }
}

function main() {

    rock_div.addEventListener('click', function(){
        game('r');
    }) 
    paper_div.addEventListener('click', function(){
        game('p');
    }) 
    scissors_div.addEventListener('click', function(){
        game('s');
    }) 

    if(userScore === 5 || computerScore === 5){
        resetGame();
    }
}
main();