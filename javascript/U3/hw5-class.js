const SUITS = ['Club', 'Diamond', 'Heart', 'Spade'];
const NUM_CARDS = 13;

class Card {
    constructor(num, suit) {
        this.num = num;
        this.suit = suit;
    }
}

class Deck {
    #isShuffled = false;
    #cards = [];

    constructor() {
        // initialize a new deck
        SUITS.forEach(suit => {
            for (let i = 0; i < NUM_CARDS; i++) {
                this.#cards.push(new Card(i + 1, suit));
            }
        });
    }

    toString() {
        let printResult = '';
        this.#cards.forEach((card, idx) => {
            if (this.#isShuffled) {
                printResult +=
                    idx % NUM_CARDS === NUM_CARDS - 1
                        ? `${card.suit} - ${card.num}.\n`
                        : `${card.suit} - ${card.num}, `;
            } else {
                printResult +=
                    idx % NUM_CARDS === NUM_CARDS - 1
                        ? `${card.num} of ${card.suit}.\n`
                        : `${card.num} of ${card.suit}, `;
            }
        });
        return printResult;
    }

    shuffleCardsBySuit() {
        if (!this.#isShuffled) {
            SUITS.forEach((_, idx) => {
                let rest = 0;
                for (
                    let i = NUM_CARDS * (idx + 1) - 1;
                    i > NUM_CARDS * idx;
                    i--
                ) {
                    const randomIdx =
                        Math.floor(Math.random() * (NUM_CARDS - rest++)) +
                        NUM_CARDS * idx;

                    [this.#cards[i], this.#cards[randomIdx]] = [
                        this.#cards[randomIdx],
                        this.#cards[i]
                    ];
                }
            });
            this.#isShuffled = true;
        } else {
            console.error('Invalid operation. The deck has been shuffled.');
        }
    }

    shuffleAllCards() {
        for (let i = this.#cards.length - 1; i > 0; i--) {
            const randomIdx = Math.floor(Math.random() * i);
            [this.#cards[i], this.#cards[randomIdx]] = [
                this.#cards[randomIdx],
                this.#cards[i]
            ];
        }
        this.#isShuffled = true;
    }
}

const deck = new Deck();
console.log(deck.toString());
deck.shuffleCardsBySuit();
console.log(deck.toString());
deck.shuffleAllCards();
console.log(deck.toString());
