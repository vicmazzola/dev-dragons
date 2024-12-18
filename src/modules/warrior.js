import { Character } from "./character.js";

export class Warrior extends Character {
    static type = 'Warrior';
    static description = 'You will be crushed by the Warrior\'s fury!';
    strength;

    constructor(name, strength) {
        super(name);
        this.strength = strength;
    }

    getBadge() {
        if (this.level >= 7 && this.strength >= 5) {
            return `Furious Warrior`;
        }

        return super.getBadge();
    }
}
