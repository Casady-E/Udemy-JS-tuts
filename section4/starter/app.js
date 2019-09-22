/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, lastRoll0, currentRoll0, lastRoll1, currentRoll1, winScore;

init();

function changeWinScore(){
  init();
};

document.querySelector('.btn-roll').addEventListener('click', function rollDice(){
  if (gamePlaying){
    lastRoll0 = currentRoll0;
    lastRoll1 = currentRoll1;
    // 1. random number
    var dice0 = Math.floor(Math.random() * 6) + 1;
    var dice1 = Math.floor(Math.random() * 6) + 1;
    currentRoll0 = dice0;
    currentRoll1 = dice1;
    // 2. display the result
    var displayDice0 = document.querySelector('.dice0');
    displayDice0.style.display = 'block';
    displayDice0.src = 'dice-' + dice0 + '.png';
    var displayDice1 = document.querySelector('.dice1');
    displayDice1.style.display = 'block';
    displayDice1.src = 'dice-' + dice1 + '.png';
    //3. update the score if number rolled was not 1
    if (dice0 !== 1 && dice1 !== 1) {
      //add score
      roundScore += dice0;
      roundScore += dice1;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else if ((dice0 !== 1 && dice1 !== 1) && (lastRoll == 6 && currentRoll == 6)) {
      document.querySelector('#score-' + activePlayer).textContent = 0;
      nextPlayer();
    }else if (dice0 == 1 || dice1 == 1){
      document.querySelector('#score-' + activePlayer).textContent = 0;
      //next player
  nextPlayer();
    }
}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
  if (gamePlaying){
  //add current score to global
  scores[activePlayer] += roundScore;

  //update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  //check if player won the game
  if ((scores[activePlayer] >= winScore) || scores[activePlayer] == winScore){
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice0').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
  } else{
  //next player
  nextPlayer();
}
}
});

function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  lastRoll = 0;
  currentRoll = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.dice0').style.display = 'none';
  document.querySelector('.dice1').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
lastRoll = 0;
currentRoll = 0;
winScore = parseInt(document.getElementById("number-value").value);
document.querySelector('.dice0').style.display = 'none';
document.querySelector('.dice1').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
};

//var dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);
//document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector("#score-0").textContent;
//console.log(x);

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
