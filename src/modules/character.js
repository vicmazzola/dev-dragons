export class Character {
    name;
    health = 100;
    mana = 100;
    #level;
    type;
    description;

    constructor(name) {
        this.name = name;
        this.#level = 1;
    }

    levelUp() {
        this.level += 1;
    }

    levelDown() {
        this.level -= 1;
    }

    get level() {
        return this.#level;
    }

    set level(newLevel) {
        if (newLevel >= 1 && newLevel <= 10) {
            this.#level = newLevel;
        }
    }

    getBadge() {
        if (this.#level >= 5) {
            return `Relentless ${this.constructor.type}`;
        }
        return `Beginner ${this.constructor.type}`;
    }

    static checkWinner(character1, character2) {
        if (character1.level === character2.level) {
            return 'It\'s a tie!!!';
        }

        if (character1.level > character2.level) {
            return `${character1.constructor.type} ${character1.name} is the winner!`;
        }

        return `${character2.constructor.type} ${character2.name} is the winner!`;
    }
}
