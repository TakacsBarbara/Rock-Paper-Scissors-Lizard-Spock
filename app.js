// DOM caching
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_img = document.getElementById("r");
const paper_img = document.getElementById("p");
const scissors_img = document.getElementById("s");
const lizard_img = document.getElementById("l");
const spock_img = document.getElementById("sp");
const smallUserWord = "(user)".fontsize(3).sub();
const smallCompWord = "(comp)".fontsize(3).sub();

function convertWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    if (letter === "l") return "Lizard";
    return "Spock";
}

function win(userChoice, computerChoice) {
    const userChoice_img = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertWord(userChoice)}${smallUserWord} beats ${convertWord(computerChoice)}${smallCompWord}. You win! 🔥`;
    userChoice_img.classList.add("green-glow");
    setTimeout(() => userChoice_img.classList.remove("green-glow"), 500);
}

function lose(userChoice, computerChoice) {
    const userChoice_img = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertWord(userChoice)}${smallUserWord} loses to ${convertWord(computerChoice)}${smallCompWord}. You lost! 💩`;
    userChoice_img.classList.add("red-glow");
    setTimeout(() => userChoice_img.classList.remove("red-glow"), 500);
}

function draw(userChoice, computerChoice) {
    const userChoice_img = document.getElementById(userChoice);
    result_p.innerHTML = `${convertWord(userChoice)}${smallUserWord} equal to ${convertWord(computerChoice)}${smallCompWord}. It's a draaaw! 😴`;
    userChoice_img.classList.add("gray-glow");
    setTimeout(() => userChoice_img.classList.remove("gray-glow"), 500);
}

function getComputerChoice() {
    const choices = ["r", "p", "s", "l", "sp"];
    const randomNumber = Math.floor(Math.random()*5);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    
    switch (userChoice + computerChoice) {
        case "sp":
        case "pr":
        case "rl":
        case "lsp":
        case "sps":
        case "sl":
        case "lp":
        case "psp":
        case "spr":
        case "rs":
            win(userChoice, computerChoice);
            break;
        case "ps":
        case "rp":
        case "lr":
        case "spl":
        case "ssp":
        case "ls":
        case "pl":
        case "spp":
        case "rsp":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "spsp":
            draw(userChoice, computerChoice);
            break; 
    }
}

function main() {

    rock_img.addEventListener("click", () => game("r"));
    paper_img.addEventListener("click", () =>  game("p"));
    scissors_img.addEventListener("click", () =>  game("s"));
    lizard_img.addEventListener("click", () => game("l"));
    spock_img.addEventListener("click", () => game("sp"));
}

main();