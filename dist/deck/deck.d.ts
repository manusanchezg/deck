import { Card } from "../card/card";
export declare class Deck {
    cards: Card[];
    constructor(cards?: Card[]);
    get numberOfCards(): number;
    private freshDeck;
    shuffle(): void;
}
