import { Card } from "../card/card";
import { SUITS, VALUES } from "../constants/constants";
export class Deck {
    constructor(cards) {
        this.cards = cards || this.freshDeck();
    }
    get numberOfCards() {
        return this.cards.length;
    }
    freshDeck() {
        return SUITS.flatMap((suit) => {
            return VALUES.map((value) => {
                return new Card(suit, value);
            });
        });
    }
    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
}
