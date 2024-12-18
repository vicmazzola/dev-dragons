import { Character } from "./character.js";

export class Mage extends Character {
    magicalElement;
    magicLevel;
    intelligence;
    static type = 'Mage';
    static description = 'The mage is relentless!';

    constructor(name, magicalElement, magicLevel, intelligence) {
        super(name);
        this.magicalElement = magicalElement;
        this.magicLevel = magicLevel;
        this.intelligence = intelligence;
    }

    getBadge() {
        if (this.magicLevel >= 5 && this.intelligence >= 5) {
            return `Master of ${this.magicalElement}`;
        }
        return super.getBadge();
    }
}
