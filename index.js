let rock = document.getElementById('rock');
let scissors = document.getElementById('scissors');
let paper = document.getElementById('paper');
let result = document.getElementById('result')
let imageDiv = document.getElementById('images')
let compChoice;
let userChoice;
let currentlyPlaying = true;
let playAgain = document.getElementById('button')
let userScore = 0;
let compScore = 0;
let userTextScore = document.getElementById('user-score');
let compTextScore = document.getElementById('comp-score');

const computerChoice = () => {
    let num = Math.floor(Math.random() * 3)
    if (num === 0) {
        compChoice = 'rock';
    } else if (num === 1) {
        compChoice = 'paper';
    } else if (num === 2) {
        compChoice = 'scissors'
    }
}


function getResult(userChoice) {
    computerChoice()
    result.style.visibility = 'visible';
    if (userChoice === compChoice) {
        result.innerHTML = `Tie! Both players threw ${compChoice}.`
    } else if (userChoice === 'rock' && compChoice === 'scissors') {
        imageDiv.appendChild(scissors)
        rock.style.border = "2px solid #008080";
        scissors.style.border = "2px solid red";
        result.innerHTML = `User throws rock and Computer throws scissors! User wins!`
        userScore++;
        userTextScore.innerHTML = userScore;
    } else if (userChoice === 'rock' && compChoice === 'paper') {
        imageDiv.appendChild(paper)
        paper.style.border = "2px solid #008080";
        rock.style.border = "2px solid red";
        result.innerHTML = `User throws rock and Computer throws paper! Computer wins!`
        compScore++;
        compTextScore.innerHTML = compScore;
    } else if (userChoice === 'paper' && compChoice === 'rock') {
        imageDiv.appendChild(rock)
        paper.style.border = "2px solid #008080";
        rock.style.border = "2px solid red";
        result.innerHTML = `User throws paper and Computer throws rock! User wins!`
        userScore++;
        userTextScore.innerHTML = userScore;
    } else if (userChoice === 'paper' && compChoice === 'scissors') {
        imageDiv.appendChild(scissors)
        paper.style.border = "2px solid red";
        scissors.style.border = "2px solid #008080";
        result.innerHTML = `User throws paper and Computer throws scissors! Computer wins!`
        compScore++;
        compTextScore.innerHTML = compScore;
    } else if (userChoice === 'scissors' && compChoice === 'rock') {
        imageDiv.appendChild(rock)
        scissors.style.border = "2px solid red";
        rock.style.border = "2px solid #008080";
        result.innerHTML = `User throws scissors and Computer throws rock! Computer wins!`
        compScore++;
        compTextScore.innerHTML = compScore;
    } else if (userChoice === 'scissors' && compChoice === 'paper') {
        imageDiv.appendChild(paper)
        paper.style.border = "2px solid #008080";
        scissors.style.border = "2px solid red";
        result.innerHTML = `User throws scissors and Computer throws paper! User wins!`
        userScore++;
        userTextScore.innerHTML = userScore;
    }
    playAgain.style.visibility = 'visible';
}

playAgain.onclick = () => {
    imageDiv.appendChild(rock)
    rock.style.border = '1px solid #282828';
    imageDiv.appendChild(paper)
    paper.style.border = '1px solid #282828';
    imageDiv.appendChild(scissors)
    scissors.style.border = '1px solid #282828';
    result.style.visibility = 'hidden';
    currentlyPlaying = true;
    playAgain.style.visibility = 'hidden';
}

paper.onclick = () => {
    if (currentlyPlaying) {
        paper.style.border = "2px solid #008080";
        imageDiv.removeChild(scissors);
        imageDiv.removeChild(rock);
        userChoice = 'paper';
        getResult(userChoice)
        currentlyPlaying = false;
    }
}

rock.onclick = () => {
    if (currentlyPlaying) {
        rock.style.border = "2px solid #008080";
        imageDiv.removeChild(scissors);
        imageDiv.removeChild(paper);
        userChoice = 'rock';
        getResult(userChoice)
        currentlyPlaying = false;
    }
}

scissors.onclick = () => {
    if (currentlyPlaying) {
        scissors.style.border = "2px solid #008080";
        imageDiv.removeChild(paper);
        imageDiv.removeChild(rock);
        userChoice = 'scissors';
        getResult(userChoice)
        currentlyPlaying = false;
    }
}

