
const computerOptions = ['rock', 'paper', 'scissors'];

//  each button listens for click events and run function game()
const playerChoice = document.querySelector('#buttons');
playerChoice.addEventListener('click', game)



function playRound(playerSelection, computerSelection) {

  if (playerSelection == 'rock' && computerSelection == 'paper') {
    return 'You lose! Paper beats Rock'
  } else if (playerSelection == 'rock' && computerSelection == 'rock') {
    return 'That was a tie! go again' 
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return 'You win! Rock beats Scissors'
  } else if (playerSelection == 'paper' && computerSelection == 'paper') {
    return 'That was a tie! go again'
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return 'You win! Paper beats Rock'
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return 'You lose! Scissors beats Paper'
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return 'You win! Scissors beats Paper'
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    return 'You lose! Rock beats Scissors'
  } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
    return 'That was a tie! go again'
  } else {
    return 'Invalid'
  }
}

function game(e) {
  playerSelection = e.target.value;
  const computerSelection = computerPlay();

  function computerPlay() {
    const random = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[random];
  }

  function play() {
    if (playRound(playerSelection, computerSelection) === 'Invalid') {
      return 'Invalid choice'
    }

    console.log('Player\'s Selection: ', playerSelection);
    console.log('Computer\'s Selection: ', computerSelection);
    return playRound(playerSelection, computerSelection);
  }

/*      function countScore() {
    if (playRound(playerSelection, computerSelection) === 'You lose! Paper beats Rock') {
      return 'user score: 0\n computer score: 1';
    } return'user score: 0\ncomputer score: 0'
  }*/
  
  console.log(play())

}
/*
for (i = 0; i < 5; i++) {
  game()
}*/

