const SUITS = ['Club', 'Diamond', 'Heart', 'Spade'];
const NUM_CARDS = 13;

function createOneCard(num, suit) {
    return { num, suit };
}

function initDeck(deck) {
    SUITS.forEach(suit => {
        for (let i = 0; i < NUM_CARDS; i++) {
            deck.push(createOneCard(i + 1, suit));
        }
    });
}

function printAllCards(deck, shuffled = false) {
    let printResult = '';
    deck.forEach(({ num, suit }, idx) => {
        if (shuffled) {
            printResult +=
                idx % NUM_CARDS === NUM_CARDS - 1
                    ? `${suit} - ${num}.\n`
                    : `${suit} - ${num}, `;
        } else {
            printResult +=
                idx % NUM_CARDS === NUM_CARDS - 1
                    ? `${num} of ${suit}.\n`
                    : `${num} of ${suit}, `;
        }
    });
    console.log(printResult);
}

function shuffleCards(cards = []) {
    let shuffledCards = [...cards];
    for (let i = cards.length; i > 0; i--) {
        const randomIdx = Math.floor(Math.random() * i);
        shuffledCards = [
            ...shuffledCards.slice(0, randomIdx),
            ...shuffledCards.slice(randomIdx + 1),
            shuffledCards[randomIdx]
        ];
    }
    return shuffledCards;
}

function shuffleDeck(deck) {
    const shuffledDeck = [];
    SUITS.forEach((_, idx) => {
        shuffledDeck.push(
            ...shuffleCards(deck.slice(NUM_CARDS * idx, NUM_CARDS * (idx + 1)))
        );
    });
    return shuffledDeck;
}

function main() {
    const deck = [];
    console.log('******* Initializing the deck *******');
    initDeck(deck);
    // console.log(deck);
    console.log('******* 1 print out - all cards in order *******');
    printAllCards(deck);
    const shuffledDeck = shuffleDeck(deck);
    console.log('******* 2 print out - all cards in random number *******');
    printAllCards(shuffledDeck, true);
    const shuffledAllCards = shuffleCards(deck);
    console.log(
        '******* 3 print out - all cards in random number & suit *******'
    );
    printAllCards(shuffledAllCards, true);
}

main();
