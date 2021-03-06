
const computerOptions = ['rock', 'paper', 'scissors'];

//  each button listens for click events and run function game()
const playerChoice = document.querySelector('#buttons');
playerChoice.addEventListener('click', game);

function displayLoseImage() {
  const imgContainer = document.querySelector('#imgContainer');
  const message = document.querySelector('#message');
  const replay = document.querySelector('#replay');
  const lose = document.querySelector('#lose');

  imgContainer.classList.add('imgContainer');
  message.classList.add('message');
  replay.classList.add('replay');
  lose.classList.add('lose');

  replay.addEventListener('click', () => {
    imgContainer.classList.remove('imgContainer');
    message.classList.remove('message');
    replay.classList.remove('replay');
    lose.classList.remove('lose');

    document.querySelector('.content__display').style.display = "none";
    document.querySelector('.computer__score').textContent = 0;
    document.querySelector('.player__score').textContent = 0;
    game
  });
}

function displayWinImage() {
  const imgContainer = document.querySelector('#winImgContainer');
  const message = document.querySelector('#win-message');
  const replay = document.querySelector('#win-replay');
  const win = document.querySelector('#win');

  imgContainer.classList.add('imgContainer');
  message.classList.add('message');
  replay.classList.add('replay');
  win.classList.add('win');

  replay.addEventListener('click', () => {
    imgContainer.classList.remove('imgContainer');
    message.classList.remove('message');
    replay.classList.remove('replay');
    win.classList.remove('win');

    document.querySelector('.content__display').style.display = "none";
    document.querySelector('.computer__score').textContent = 0;
    document.querySelector('.player__score').textContent = 0;
    game
  });
}

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
  const display = document.querySelector('.display');
  const player = document.querySelector('.player');
  const computer = document.querySelector('.computer');
  document.querySelector('.content__display').style.display = "block";

  function updateScoreboard(computerScore, playerScore) {
    document.querySelector('.computer__score').textContent = computerScore;
    document.querySelector('.player__score').textContent = playerScore;
  }

    // creating a scoreboard 
  function scoreboard() {
    computerScore = parseInt(document.querySelector('.computer__score').textContent);
    playerScore = parseInt(document.querySelector('.player__score').textContent);

    if(playerScore < 5 || computerScore < 5) {
      if(playRound(playerSelection, computerSelection) == 'You win! Paper beats Rock' || playRound(playerSelection, computerSelection) == 'You win! Rock beats Scissors' || playRound(playerSelection, computerSelection) == 'You win! Scissors beats Paper') {
        playerScore += 1
      } else if(playRound(playerSelection, computerSelection) == 'You lose! Paper beats Rock' || playRound(playerSelection, computerSelection) == 'You lose! Rock beats Scissors' || playRound(playerSelection, computerSelection) == 'You lose! Scissors beats Paper') {
        computerScore += 1
      } else {
        playerScore;
        computerScore;
      }
      updateScoreboard(computerScore, playerScore)
    }

    if(playerScore == 5) {
      displayWinImage();
    } 
    if(computerScore == 5) {
      displayLoseImage();
    }
  }

  function computerPlay() {
    const random = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[random];
  }

  function play() {
    if (playRound(playerSelection, computerSelection) === 'Invalid') {
      return 'Invalid choice'
    }
    player.textContent = 'Player\'s Selection: ' + playerSelection;
    computer.textContent = 'Computer\'s Selection: ' + computerSelection;
    return playRound(playerSelection, computerSelection);
  }

  scoreboard()
  display.textContent = play()

}