let scorecard = JSON.parse(localStorage.getItem('scorecard')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0
};

document.body.querySelector('.your-score').innerHTML = `🏆 Your Score: ${scorecard.Wins}`;
document.body.querySelector('.computer').innerHTML = `💻 Computer: ${scorecard.Losses}`;
document.body.querySelector('.ties').innerHTML = `= Ties: ${scorecard.Ties} =`;

function playGame(playerMove) {
  const computerMove = makeComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.!';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.!';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.!';
    }
  }

  if (result === 'You win.!') {
    scorecard.Wins += 1;
  } else if (result === 'You lose.') {
    scorecard.Losses += 1;
  } else if (result === 'Tie.') {
    scorecard.Ties += 1;
  }

  localStorage.setItem('scorecard', JSON.stringify(scorecard));

  document.body.querySelector('.r1-box').innerHTML = `You picked <strong>${playerMove}</strong> - Computer picked <strong>${computerMove}</strong>`;
  
  if (result === 'You win.!') {
    document.body.querySelector('.r2-box').innerHTML = `${result} 🎉`;
  } else {
    document.body.querySelector('.r2-box').innerHTML = `${result}`;
  }

  updateScorecard();

};

function makeComputerMove() {
  let randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
};

function updateScorecard() {
  document.body.querySelector('.your-score').innerHTML = `🏆 Your Score: ${scorecard.Wins}`;
  document.body.querySelector('.computer').innerHTML = `💻 Computer: ${scorecard.Losses}`;
  document.body.querySelector('.ties').innerHTML = `= Ties: ${scorecard.Ties} =`;
}

function resetGame() {
  scorecard.Wins = 0,
  scorecard.Losses = 0,
  scorecard.Ties = 0

  localStorage.removeItem('scorecard');
  updateScorecard();
}

