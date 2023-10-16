import { Deck } from "./deck/deck.js";

const deck = new Deck();
deck.shuffle()
console.log(deck.cards);
