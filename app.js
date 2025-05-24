const handEmojis = {
  rock: '✊',
  paper: '✋',
  scissors: '✌️',
  bomb: '💣'
};

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return '💣 Secret code activated! You obliterated the AI. You win!';
  }
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'AI wins!';
  }
}

function playGame(choice) {
  const cheatInput = document.getElementById('cheat-input').value.trim().toLowerCase();
  const userChoice = cheatInput === 'bomb' ? 'bomb' : choice;
  const computerChoice = getComputerChoice();

  document.getElementById('human-hand').textContent = handEmojis[userChoice] || '🤔';
  document.getElementById('ai-hand').textContent = handEmojis[computerChoice] || '🤖';

  setTimeout(() => {
    alert(determineWinner(userChoice, computerChoice));
  }, 100);
}

function submitCheat() {
  playGame('');
}
