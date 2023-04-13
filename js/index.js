let firstCard;
let secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sum;

firstCard = 10;
secondCard = 11;
sum = firstCard + secondCard;

if (sum <= 20) {
    message = "Do you want to draw a new card? 😀";
} else if (sum === 21) {
    message = `Whohoo! You've got Blackjack! 🥳`;
} else {
    message = `You're out of the game! 😭`;
    isAlive = false;
}

function startGame() {
    
}