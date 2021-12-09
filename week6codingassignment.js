let mainDeck = [
    {
        name: 'Ace of Spades',
        value: 14
    },
    {
        name: '2 of Spades',
        value: 2
    },
    {
        name: '3 of Spades',
        value: 3
    },
    {
        name: '4 of Spades',
        value: 4
    },
    {
        name: '5 of Spades',
        value: 5
    },
    {
        name: '6 of Spades',
        value: 6
    },
    {
        name: '7 of Spades',
        value: 7
    },
    {
        name: '8 of Spades',
        value: 8
    },
    {
        name: '9 of Spades',
        value: 9
    },
    {
        name: '10 of Spades',
        value: 10
    },
    {
        name: 'Jack of Spades',
        value: 11
    },
    {
        name: 'Queen of Spades',
        value: 12
    },
    {
        name: 'King of Spades',
        value: 13
    },
    {
        name: 'Ace of Hearts',
        value: 14
    },
    {
        name: '2 of Hearts',
        value: 2
    },
    {
        name: '3 of Hearts',
        value: 3
    },
    {
        name: '4 of Hearts',
        value: 4
    },
    {
        name: '5 of Hearts',
        value: 5
    },
    {
        name: '6 of Hearts',
        value: 6
    },
    {
        name: '7 of Hearts',
        value: 7
    },
    {
        name: '8 of Hearts',
        value: 8
    },
    {
        name: '9 of Hearts',
        value: 9
    },
    {
        name: '10 of Hearts',
        value: 10
    },
    {
        name: 'Jack of Hearts',
        value: 11
    },
    {
        name: 'Queen of Hearts',
        value: 12
    },
    {
        name: 'King of Hearts',
        value: 13
    },
    {
        name: 'Ace of Clubs',
        value: 14
    },
    {
        name: '2 of Clubs',
        value: 2
    },
    {
        name: '3 of Clubs',
        value: 3
    },
    {
        name: '4 of Clubs',
        value: 4
    },
    {
        name: '5 of Clubs',
        value: 5
    },
    {
        name: '6 of Clubs',
        value: 6
    },
    {
        name: '7 of Clubs',
        value: 7
    },
    {
        name: '8 of Clubs',
        value: 8
    },
    {
        name: '9 of Clubs',
        value: 9
    },
    {
        name: '10 of Clubs',
        value: 10
    },
    {
        name: 'Jack of Clubs',
        value: 11
    },
    {
        name: 'Queen of Clubs',
        value: 12
    },
    {
        name: 'King of Clubs',
        value: 13
    },
    {
        name: 'Ace of Diamonds',
        value: 14
    },
    {
        name: '2 of Diamonds',
        value: 2
    },
    {
        name: '3 of Diamonds',
        value: 3
    },
    {
        name: '4 of Diamonds',
        value: 4
    },
    {
        name: '5 of Diamonds',
        value: 5
    },
    {
        name: '6 of Diamonds',
        value: 6
    },
    {
        name: '7 of Diamonds',
        value: 7
    },
    {
        name: '8 of Diamonds',
        value: 8
    },
    {
        name: '9 of Diamonds',
        value: 9
    },
    {
        name: '10 of Diamonds',
        value: 10
    },
    {
        name: 'Jack of Diamonds',
        value: 11
    },
    {
        name: 'Queen of Diamonds',
        value: 12
    },
    {
        name: 'King of Diamonds',
        value: 13
    }
];

let shuffledDeck = [];

while (mainDeck.length !== 0) {
    let index = Math.floor(Math.random() * mainDeck.length);
   shuffledDeck.push(mainDeck[index]);
    mainDeck.splice(index, 1);
}

/*console.log(shuffledDeck)*/

let deck1 = shuffledDeck.slice(0, 26);
let deck2 = shuffledDeck.slice(26, 52);

console.log(deck1);

/*console.log(deck1);
console.log(deck2);*/


class Deck {
    constructor(deck) {
        this.deck = deck;
    }

    DealDeck1() {
        let deck1 = this.deck.slice(0, 26);
        }

    DealDeck2() {
        let deck2 = this.deck.slice(26, 52);
    }
}

console.log(new Deck(shuffledDeck).DealDeck2());

class Player {
    constructor(name, deck) {
        this.name = name;
        this.deck = deck;
        let score = 0;
    }
}

/*
let player1 = [
    {
        name: 'Sam',
        deck: deck1,
        score: 0
    }
]

let player2 = [
    {
        name: 'Noah',
        deck: deck2,
        score: 0
    }
]
*/

/*console.log(player1[0].score);*/

class War {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
    
    runGame() {
        for(let i = 0; i < 26; i++) {
            console.log(`${this.player1[0].name} plays ${this.player1[0].deck[i].name} and ${this.player2[0].name} plays ${this.player2[0].deck[i].name}.`);
            if (this.player1[0].deck[i].value > this.player2[0].deck[i].value) {
                this.player1[0].score += 1;
            } else if (this.player1[0].deck[i].value < this.player2[0].deck[i].value) {
                this.player2[0].score += 1;
            }
        }
        console.log(`${this.player1[0].name} scored ${this.player1[0].score} points and ${this.player2[0].name} scored ${this.player2[0].score} points`);
        if (this.player1[0].score > this.player2[0].score) {
            console.log(`${this.player1[0].name} wins!`);
        } else if (this.player1[0].score < this.player2[0].score) {
            console.log(`${this.player2[0].name} wins!`);
        } else {
            console.log('Its a tie!');
        }
    }
}
/*
console.log(new War(player1, player2).runGame());
*/
class Menu {
    constructor() {
        this.players = [];
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.startGame();
                    break
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) start game
        `)
    }

    createPlayer(deck) {
        let name = prompt('Enter name for new player');
        this.players.push(new Player(name, deck));
    }

    startGame() {
        let deck1 = new Deck(shuffledDeck).DealDeck1();
        let deck2 = new Deck(shuffledDeck).DealDeck2();
        this.createPlayer(deck1);
        this.createPlayer(deck2);
        alert(this.players[0].name);
    }

    



}

let menu = new Menu();
menu.start();