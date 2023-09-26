'use strict';

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
const displayMessage = function (message){
  document.querySelector('.message').textContent = message; 
}


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    
      // (document.querySelector('.message').textContent = 'There is no Number')
      displayMessage('There is no Number');
    

  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    console.log((document.querySelector('.number').textContent = secretNumber));

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  }else if(guess !== secretNumber){
    // document.querySelector('.message').textContent = guess > secretNumber ? 'Too Hight' : 'Too Low';
    displayMessage(guess > secretNumber ? 'Too Hight' : 'Too Low')
    score--;
    document.querySelector('.score').textContent = score;
  } else{
    // document.querySelector('.message').textContent = 'you lost the game';
    displayMessage('you lost the game');
    document.querySelector('.score').textContent = 0;
  }
  // else if (guess > secretNumber) {
  //   if(score > 1){
  //     document.querySelector('.message').textContent = 'Number id too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }else{
  //     document.querySelector('.message').textContent = 'You lost the game';
  //   }
  // } else if (guess < secretNumber) {
  //   if(score > 1){
  //     document.querySelector('.message').textContent = 'Number id too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }else{
  //     document.querySelector('.message').textContent = 'You lost the game';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing';
  displayMessage('Start guessing');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
 
})
