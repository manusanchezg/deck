import { Card } from "../card/card";
import { JOKER, SUITS, VALUES } from "../constants/constants";

export class Deck {
  cards: Card[];

  constructor(cards?: Card[]) {
    this.cards = cards || this.freshDeck();
  }

  get numberOfCards(): number {
    return this.cards.length;
  }
  private freshDeck(): Card[] {
    const jokers: Card[] = [new Card(JOKER, "0"), new Card(JOKER, "0")];
    const standardDeck: Card[] = SUITS.flatMap((suit: string) => {
      return VALUES.map((value: string) => {
        return new Card(suit, value);
      });
    });
    return standardDeck.concat(jokers)
  }
  // using Fisher-Yates shuffle algorithm
  shuffle(): void {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}
