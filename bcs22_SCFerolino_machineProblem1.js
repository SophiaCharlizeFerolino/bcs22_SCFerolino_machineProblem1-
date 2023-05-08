function playGame() {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  const maxGuess = parseInt(prompt('How many attempts you like?'), 10);
  let numGuess = 0;
  let correctGuess = false;

  while (numGuess < maxGuess && !correctGuess) {
    const userNumGuess = parseInt(prompt('Guess a number between 1 and 100:'), 10);
  
    if (isNaN(userNumGuess) || userNumGuess < 1 || userNumGuess > 100) {
      alert('Please enter a valid number between 1 and 100.');
    } else {
      numGuess++;
    
      if (userNumGuess === randomNum) {
        correctGuess = true;
        alert(`Congratulations, you guessed the number in ${numGuess} attempts!`);
      } else if (userNumGuess < randomNum) {
        alert('Too low! Guess a higher number.');
      } else {
        alert('Too high! Guess a lower number.');
      }
    }
  }

  if (!correctGuess) {
    alert(`Sorry, you ran out of attempts. The number was ${randomNum}.`);
  }
}
playGame();
