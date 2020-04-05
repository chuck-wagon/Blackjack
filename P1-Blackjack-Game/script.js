//const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
const cards = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11];

let deck = []; // this is the random hand
let player = []; // this is the player's hand
let dealer = []; // this is the dealer's hand

let playerScore = 0;
let dealerScore = 0;

//onclick="document.getElementById('start').style.display = 'block';
document.getElementById('start').addEventListener('click', start);
document.getElementById('stand').addEventListener('click', stand);
document.getElementById('hit').addEventListener('click', hit);


function start(e) {
    //e.preventDefault() //prevent refresh
    //document.getElementById('stand').addEventListener('click', stand);
    // display none for hit stand button then when click start make visible and hide in endgame function
    document.getElementById('hit').style.display="inline-block";
    document.getElementById('stand').style.display="inline-block";
    document.getElementById('start').style.display="none";

    // document.getElementById("explode").pause;  

    document.getElementById('randy-gerald').style.display="none";
    document.getElementById('let-it-ride').style.display="none";
    document.getElementById('dealer-21').style.display="none";
    document.getElementById('hit-me-gif').style.display="none";
    document.getElementById('stewie-excited').style.display="none";
    document.getElementById('explosion').style.display="none";
    document.getElementById('rick-wink').style.display="none";
    document.getElementById('cat-skydive').style.display="none";
    document.getElementById('peter-fall').style.display="none";
    
    shuffle();
    deal();
}
function shuffle() {
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let temp = cards[i]
      cards[i] = cards[j]
      cards[j] = temp;
    }
    deck = [...cards]
}
function deal() { 
    player.push(deck.pop())
    dealer.push(deck.pop())
    player.push(deck.pop())
    dealer.push(deck.pop())
    // document.getElementById('hit').addEventListener('click', hit);
    // document.getElementById('stand').addEventListener('click', stand);
    //document.getElementById('start').removeEventListener('click', start);
    
    console.log('The player hand is', player);
    console.log('The dealer hand is', dealer);
    
    displayPlayer();
    displayDealer(false);
    score();
}
function score () {
    playerScore = player.reduce( (a,b) => (a)+(b), 0);
    dealerScore = dealer.reduce( (a,b) => (a)+(b), 0);
    
    console.log('Player score ' + playerScore)
    console.log('Dealer score ' + dealerScore)
}
function displayPlayer () {
    var cardStr = ''
    player.forEach((card)=>{
        cardStr += card+' '
    })
    document.getElementById('player').textContent = ('Player has ') + cardStr;
}
function displayDealer (visible) {
    var cardStr = ''
    if (visible) {
    dealer.forEach((card)=>{
        cardStr += card+' '
        })
    }
    else {
         cardStr = dealer[0]+' x'
    }
    document.getElementById('dealer').textContent = ('Dealer has ') + cardStr;
}  
// Below is the hit function, the user can click as many times until hand breaks
function hit (e) {
    console.log('(player hit)')
    player.push(deck.pop())
    //document.getElementById('player').textContent = player
    displayPlayer();
    score();
    if (playerScore > 21) {
        console.log('BUST!');
        // document.getElementById("hit").remove();
        document.getElementById('explosion').style.display="inline-block";
        document.getElementById("explode");
        var x = document.getElementById("explode"); 

        function playAudio() { 
          x.play();
        }
        playAudio();
        endGame();
    }
}
function stand (e) {
    // document.getElementById("hit").remove();
    console.log('(player stand)');
    score();
    while (dealerScore < 17) {
        console.log('(dealer thought about it and took a hit)');
        dealer.push(deck.pop());
        displayDealer(true);
        score();
    }
    if (playerScore > dealerScore && dealerScore >= 17 && playerScore <= 21) {
        console.log('Player won!');
        document.getElementById('let-it-ride').style.display="inline-block";
        displayDealer(true);
        endGame();
    }
    if (dealerScore > playerScore && dealerScore <= 21) {
        console.log('Dealer won');
        document.getElementById('dealer-21').style.display="inline-block";
        displayDealer(true);
        endGame();
        }
        if (playerScore >= 17 && dealerScore >=17 && playerScore === dealerScore) {
            console.log('PUSH! PLAYER AND DEALER TIE!');
            document.getElementById('peter-fall').style.display="inline-block";
            displayDealer(true);
            endGame();
        }
        else if (dealerScore > 21) {
            console.log('Dealer BUST player wins!');
            document.getElementById('stewie-excited').style.display="inline-block";
            displayDealer(true);
            endGame();
        }
}  
function endGame () {
    console.log('DEAL AGAIN!')
    document.getElementById('hit').style.display="none";
    document.getElementById('stand').style.display="none";
    document.getElementById('start').style.display="inline-block";


    deck = []; 
    player = [];
    dealer = [];
    playerScore = 0;
    dealerScore = 0;
}
// function showImage() {
//     var add =
// }




















   // if (dealerScore < 17) {
    //     console.log('(dealer hit)')
    //     dealer.push(deck.pop())
    //     score();
    // }

// document.getElementById('win').textContent = '';
// document.getElementById('start').addEventListener('click', start);
// document.getElementById("hit").remove();
//document.getElementById('hit').removeEventListener('hit');

// function checkForWin () {
    
    //     if (playerScore > 21) {
//         console.log('player BUST dealer wins!')
//         endGame();
//         else if {

//         }
//     }
  


/*  document.getElementById('tieGame').textContent = '';
    document.getElementById('player').textContent = '';
    document.getElementById('dealer').textContent = '';
    document.getElementById('win').textContent = '';
    */

// else if conditions stand 



        // else {
        //      console.log('player won')
        //      endGame();
        // }
        // document.getElementById('dealer').textContent = dealer; 
    
    // else if (dealerScore <= 21 && dealerScore > playerScore ) {
    //     console.log('dealer won!');
    //     endGame();
    // }
    // else if (dealerScore <= 21 && playerScore > dealerScore ) {
    //     console.log('player won!');
    //     endGame();
    // }
    // else if (dealerScore == 21) {
    //     console.log('dealer wins! 21!');
    //     endGame();
    // }
        // else if (dealerScore > 21) {
    //     console.log('dealer bust player wins!')
    //     document.getElementById('win').textContent = 'You win!';
    //     endGame();
    // }
    
    // else if (playerScore > dealerScore) {
    //     console.log('PLAYER STANDS AND WINS!');
    //     document.getElementById('win').textContent = 'You win!';
    //     endGame();
    // }


// else if (playerScore > dealerScore) {
    //     console.log('PLAYER STANDS AND WINS!')
    //     document.getElementById('win').textContent = 'You win!';
    //     endGame();
    //     endGame();
    // }
    // else if (dealerScore > 21) {
    //     console.log('PLAYER WINS! DEALER BUST!')
    //     document.getElementById('win').textContent = 'You win!';
    //     endGame()
    // }
    // else if (dealerScore == playerScore) {
    //     console.log('PUSH')
    //     endGame();
    //     endGame();
    // }
    // else if (dealerScore >= 17 && playerScore > dealerScore) {
    //     console.log('PLAYER STANDS AND PLAYER WINS!')
    //     document.getElementById('win').textContent = 'You win!';
    //     endGame()
    // }
    // else if (dealerScore <= 21 && dealerScore > playerScore) {
    //     console.log('dealer won!')
    //     endGame();
    //     endGame();
    // }


// Start with FREE $5,000 USD 
// Create PLAY/GAMBLE! button
// DEAL button, HIT button, SPLIT button, DOUBLE button, STAND button
// Create BET or ANTE button that functions according to the BANK
// Create HIDE function to hide PLAY buttons when PLAYER gets Blackjack
// Create LOSE function when PLAYER goes beyond value of 21
// Create BANK score for PLAYER earnings
// Create BUY-IN link for PLAYER to add cash via Venmo or Zelle and create transfer to foreign bank account
// ADD random celebration GIFs for Blackjack 
// ADD image which reads "FREE ON-LINE GAMBLING"
// https://upload.wikimedia.org/wikipedia/commons/3/33/Blackjack21.jpg
// Description about playing for REAL MONEY?



    
    // if (playerScore == 21) {
        //     console.log('player blackjack')
        //     endGame()
        // }
        // else if (dealerScore > playerScore) {
            //     console.log('dealer won!')
        //     endGame()
        // }
        // else if (playerScore > dealerScore) {
            //     console.log('player win')
            //     endGame()
            // }
            
        
                                //function ai () {
                                    //dealerScore = dealer.push(deck.pop())
                                    //if (dealerScore < 17 && playerScore < 21) {
                                        //return hit
                                        
                                        // else (dealerScore > 21) 
                                        // return win function
                                        
                                        //core()
                                        // does this require if else function to check score
                                        // 
                                        
                                        // create function deal, that runs shuffle takes top two cards from array then renders them on DOM
                                        
                                        // pop off cards into array and assign to hand, update html content of player/dealer div
                                        
                                        // get deal to go to hand
                                        
                                        