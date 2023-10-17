"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
var card_1 = require("../card/card");
var constants_1 = require("../constants/constants");
var Deck = /** @class */ (function () {
    function Deck(cards) {
        this.cards = cards || this.freshDeck();
    }
    Object.defineProperty(Deck.prototype, "numberOfCards", {
        get: function () {
            return this.cards.length;
        },
        enumerable: false,
        configurable: true
    });
    Deck.prototype.freshDeck = function () {
        return constants_1.SUITS.flatMap(function (suit) {
            return constants_1.VALUES.map(function (value) {
                return new card_1.Card(suit, value);
            });
        });
    };
    Deck.prototype.shuffle = function () {
        for (var i = this.numberOfCards - 1; i > 0; i--) {
            var newIndex = Math.floor(Math.random() * (i + 1));
            var oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    };
    return Deck;
}());
exports.Deck = Deck;
