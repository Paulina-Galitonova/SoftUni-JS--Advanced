function printDeckOfCards(cards) {
    let newCards = [];

    function createCard(cardString) {
        let cardFace = cardString.slice(0, -1);
        let cardSuite = cardString.slice(-1);

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
    let validFace = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let validSuite = ["S", "H", "D", "C"];

    let isValid=true;

    for (let cardString of cards) {
        let cardFace = cardString.slice(0, -1);
        let cardSuite = cardString.slice(-1);

        if (!validFace.includes(cardFace) || !validSuite.includes(cardSuite)) {
            console.log(`Invalid card: ${cardString}`);
            isValid=false;
        } else {
            let card = createCard(cardString);
            newCards.push(card.toString());
        }
    }

    if (isValid){
        console.log(newCards.join(' '));
    }

   
}

printDeckOfCards(['5S', '3D', 'QD', '1C']);