"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALUES = exports.Values = exports.JOKER = exports.SUITS = exports.Suits = void 0;
var Suits;
(function (Suits) {
    Suits["spades"] = "\u2660";
    Suits["clubs"] = "\u2663";
    Suits["diamonds"] = "\u2666";
    Suits["hearts"] = "\u2665";
})(Suits || (exports.Suits = Suits = {}));
exports.SUITS = [
    Suits.clubs,
    Suits.diamonds,
    Suits.hearts,
    Suits.spades,
];
exports.JOKER = "JOKER";
var Values;
(function (Values) {
    Values["Ace"] = "A";
    Values["Two"] = "2";
    Values["Three"] = "3";
    Values["Four"] = "4";
    Values["Five"] = "5";
    Values["Six"] = "6";
    Values["Seven"] = "7";
    Values["Eight"] = "8";
    Values["Nine"] = "9";
    Values["Ten"] = "10";
    Values["Jack"] = "J";
    Values["Queen"] = "Q";
    Values["King"] = "K";
})(Values || (exports.Values = Values = {}));
exports.VALUES = [
    Values.Ace,
    Values.Two,
    Values.Three,
    Values.Four,
    Values.Five,
    Values.Six,
    Values.Seven,
    Values.Eight,
    Values.Nine,
    Values.Ten,
    Values.Jack,
    Values.Queen,
    Values.King,
];
