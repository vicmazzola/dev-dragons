import { Archer } from "./archer.js";
import { Mage } from "./mage.js";
import { Character } from "./character.js";

export class ArcherMage extends Character {
    archerSide;
    mageSide;
    static type = 'ArcherMage';
    static description = 'Wielder of magical spears and arrows!';

    constructor(name, dexterity, magicalElement, magicLevel, intelligence) {
        super(name);
        this.archerSide = new Archer(name, dexterity);
        this.mageSide = new Mage(name, magicalElement, magicLevel, intelligence);
    }

    getBadge() {
        return `${this.archerSide.getBadge()} and ${this.mageSide.getBadge()}`;
    }
}
