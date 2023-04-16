let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sum = 0;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let player = {
  name: "Joshua",
  chips: 250,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = `${player.name} : $${player.chips}`;

function getRandomCard() {
  if (Math.floor(Math.random() * 13) + 1 === 1) {
    return 11;
  } else if (
    Math.floor(Math.random() * 13) + 1 === 11 ||
    Math.floor(Math.random() * 13) + 1 === 12 ||
    Math.floor(Math.random() * 13) + 1 === 13
  ) {
    return 10;
  } else {
    return Math.floor(Math.random() * 9) + 1;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = `You've got Blackjack!`;
  } else {
    message = `You're out of the game!`;
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
