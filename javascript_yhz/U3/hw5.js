//create 52 cards
const patterns = ["Clubs", "Diamonds", "Hearts", "Spades"];
const cardNum = 13;
let isShuffled;

class Card {
  constructor(num, pattern) {
    this.pattern = pattern;
    this.num = num;
  }
}
function initializeCards() {
  let deck = [];
  patterns.forEach((pattern) => {
    for (i = 1; i <= cardNum; i++) {
      deck.push(new Card(i, pattern));
    }
  });
  isShuffled = false;
  return deck;
}

function printCards(cards) {
  let results = "";
  if (!isShuffled) {
    cards.forEach((card, idx) => {
      if ((idx + 1) % cardNum !== 0) {
        results += `${card.num} "of" ${card.pattern}, `;
      } else {
        results += `${card.num} "of" ${card.pattern}.\n`;
      }
    });
    console.log(results);
  } else {
    cards.forEach((card, idx) =>
      (idx + 1) % cardNum === 0
        ? (results += card.pattern + "-" + card.num + "." + "\n")
        : (results += card.pattern + "-" + card.num + ",")
    );
    console.log(results);
  }
}

function shuffleCards(cards) {
  let shuffledDeck = [];
  for (let i = 0; i < patterns.length; i++) {
    let shuffledCards = [...cards.slice(cardNum * i, cardNum * (i + 1))];
    shuffledDeck = [
      ...shuffledDeck.slice(0, cardNum * i),
      ...shuffleDeck(shuffledCards),
      //   ...shuffledDeck.slice(cardNum * (i + 1)),
    ];
  }
  return shuffledDeck;
}

function shuffleDeck(cards) {
  isShuffled = true;
  let shuffledCards = [...cards];
  for (let i = 0; i < cards.length; i++) {
    let randomIdx = Math.floor(Math.random() * cards.length);
    shuffledCards = [
      ...shuffledCards.slice(0, randomIdx),
      ...shuffledCards.slice(randomIdx + 1),
      shuffledCards[randomIdx],
    ];
  }
  return shuffledCards;
}

const allCards = initializeCards();
const shuffledCards = shuffleCards(allCards);
const shuffledDeck = shuffleDeck(allCards);
printCards(allCards);
printCards(shuffledCards);
printCards(shuffledDeck);
