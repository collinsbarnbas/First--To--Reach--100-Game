'use strict';

//selecting elements
let totalScorePlayr1 = document.getElementById('score--0');
let totalScorePlayr2 = document.getElementById('score--1');
let player1CurntScore = document.querySelector('#current--0');
let player2CurntScore = document.querySelector('#current--1');
let player1Active = document.querySelector('.player--0');
let player2Active = document.querySelector('.player--1');
let diceImage = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

//starting position
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
diceImage.classList.add('hidden');

const score = [0,0];
let count = 0;
let activePlayer = 0;
let playing = true;

//roll button functionalities
btnRoll.addEventListener
('click',function(){

    if(playing){
    //generate randome dice number
    let diceRollRand = Math.trunc(Math.random()*6) +1;

    //display respective dice image
    diceImage.classList.remove('hidden');
    diceImage.src=`dice-${diceRollRand}.png`;

    //adding scores to our current element
    if(diceRollRand !== 1){
            count += diceRollRand;
            document.querySelector(`#current--${activePlayer}`).textContent = count;
        
    }else{
        count = 0;
        document.querySelector(`#current--${activePlayer}`).textContent = count;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player1Active.classList.toggle('player--active');
        player2Active.classList.toggle('player--active');

    }
 }  
})

//score updated
btnHold.addEventListener('click',function(){
    if(playing){

    score[activePlayer] += count;
   
    activePlayer === 0 ? 
    totalScorePlayr1.textContent = score[activePlayer] : totalScorePlayr2.textContent = score[activePlayer] ;
   
    count = 0;
   
    document.querySelector(`#current--${activePlayer}`).textContent = count;
    activePlayer = activePlayer === 0 ? 1 : 0;
   
    player1Active.classList.toggle('player--active');
    player2Active.classList.toggle('player--active');
    
    
    
    if(score[0] >= 100){
        playing = false;
        console.log('player 1 wins')
        diceImage.classList.add('hidden');
        document.querySelector('.player--0').classList.add('winner');

    }else if(score[1] >= 100){
        playing = false;
        console.log('player 2 wins')
        diceImage.classList.add('hidden');
        document.querySelector('.player--1').classList.add('winner');
    }
 }  
})

btnNew.addEventListener('click', function(e){
    window.location.reload();
});