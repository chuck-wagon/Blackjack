// These are the card values set at integers with Ace as 11 only
const cards = [ 11, 11, 11, 11, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

let deck = []; // this is the random hand
let player = []; // this is the player's hand
let dealer = []; // this is the dealer's hand

let playerScore = 0;
let dealerScore = 0;

//var playTrack = () => {[].play()};
//var peter = document.getElementById("push-sound"); 

//onclick="document.getElementById('start').style.display = 'block';
document.getElementById('start').addEventListener('click', start);
document.getElementById('stand').addEventListener('click', stand);
document.getElementById('hit').addEventListener('click', hit);
document.getElementById("happy-sandbox").play();


function start(e) {
    //e.preventDefault() //prevent refresh
    document.getElementById('hit').style.display="inline-block";
    document.getElementById('stand').style.display="inline-block";
    document.getElementById('start').style.display="none";

    document.getElementById('office').style.display="none";
    document.getElementById('snuggler-fly').style.display="none";
    document.getElementById('randy-gerald').style.display="none";
    document.getElementById('let-it-ride').style.display="none";
    document.getElementById('dealer-21').style.display="none";
    document.getElementById('hit-me-gif').style.display="none";
    document.getElementById('stewie-excited').style.display="none";
    document.getElementById('explosion').style.display="none";
    document.getElementById('rick-wink').style.display="none";
    document.getElementById('cat-skydive').style.display="none";
    document.getElementById('peter-fall').style.display="none";
    document.getElementById('wonka').style.display="none";
    document.getElementById("happy-sandbox").play();
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
        document.getElementById("explode").play();
        
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
        document.getElementById('wonka').style.display="inline-block";
        document.getElementById("cheer").play();
        displayDealer(true);
        endGame();
    }
    if (dealerScore > playerScore && dealerScore <= 21) {
        console.log('Dealer won');
        document.getElementById('dealer-21').style.display="inline-block";
        document.getElementById("success-sound").play();
        displayDealer(true);
        endGame();
        }
        if ((playerScore === dealerScore) && (playerScore && dealerScore <= 21)) {
            console.log('PUSH! PLAYER AND DEALER TIE!');
            document.getElementById('office').style.display="inline-block";
            document.getElementById('peter-fall').style.display="inline-block";
            document.getElementById("push-sound").play();
            
            displayDealer(true);
            endGame();
        }
        else if (dealerScore > 21) {
            console.log('Dealer BUST player wins!');
            document.getElementById('stewie-excited').style.display="inline-block";
            document.getElementById('snuggler-fly').style.display="inline-block";
            document.getElementById("win-sound").play();
            
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