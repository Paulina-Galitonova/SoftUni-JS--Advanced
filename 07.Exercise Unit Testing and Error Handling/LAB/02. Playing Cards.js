function playingCards(cardFace, cardSuite) {
    let validFace = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let validSuite = ["S", "H", "D", "C"];

    if (!validFace.includes(cardFace) || !validSuite.includes(cardSuite)) {
        throw new Error("Error");
    }

    let card = {
        cardFace,
        cardSuite,
        toString: function () {
            // Use UTF code literals for the suits
            const suitSymbols = {
                'S': '\u2660',
                'H': '\u2665',
                'D': '\u2666',
                'C': '\u2663'
            };
            return `${this.cardFace}${suitSymbols[this.cardSuite]}`;
        }
    };

    return card;
}

try {
    const myCard = playingCards('A', 'S');
    console.log(myCard.toString()); // Output: A♠
} catch (error) {
    console.error(error.message);
}
