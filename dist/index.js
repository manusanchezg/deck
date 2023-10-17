"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
var deck_1 = require("./deck/deck");
Object.defineProperty(exports, "Deck", { enumerable: true, get: function () { return deck_1.Deck; } });
var deck_2 = require("./deck/deck");
var deck = new deck_2.Deck();
console.log(deck.cards);
