import { Card } from "../card/card";
import { SUITS, VALUES } from "../constants/constants";

export class Deck {
  cards: Card[];

  constructor(cards?: Card[]) {
    this.cards = cards || this.freshDeck();
  }

  get numberOfCards(): number {
    return this.cards.length;
  }
  private freshDeck(): Card[] {
    return SUITS.flatMap((suit: string) => {
      return VALUES.map((value: string) => {
        return new Card(suit, value);
      });
    });
  }
  shuffle(): void {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}
