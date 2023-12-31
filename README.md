# Deck Module

The `Deck` module provides a class for working with a deck of cards. It includes methods for creating a fresh deck and shuffling the deck.

## Usage

First, import the `Deck` class:

```javascript
import { Deck } from "cards-deck"; 
```

## Creating a Fresh Deck

To create a fresh deck of cards, you can use the `freshDeck` method provided by the `Deck` class:

```javascript
const deck = new Deck();
```

The freshDeck method generates a new deck of 52 cards, including the standard 4 suits (♠, ♣, ♦, ♥) and 14 values (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, JOKER).

## Shuffling the Deck

You can shuffle the deck of cards using the shuffle method:

```javascript
deck.shuffle();
```

The shuffle method shuffles the order of the cards using Fisher-Yates algorithm, providing a randomized order.

# Example

```javascript
import { Deck } from "cards-deck";

const deck = new Deck();

// Create a fresh deck
const freshDeck = deck.freshDeck();
console.log("Fresh Deck:", freshDeck);

// Shuffle the deck
deck.shuffle();
console.log("Shuffled Deck:", deck.cards);
```

### License

This module is open-source and available under the MIT License. You are free to use and modify it as needed for your projects.
