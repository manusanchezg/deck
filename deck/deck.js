import { Card } from "../card/card.js";
import { SUITS, VALUES } from "../constants/constants.js";

export class Deck {
  constructor(cards = this.freshDeck()) {
    this.cards = cards;
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
