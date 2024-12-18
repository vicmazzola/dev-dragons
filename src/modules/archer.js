import { Character } from "./character.js";

export class Archer extends Character {
    static type = 'Archer';
    static description = 'You have my bow!';
    dexterity;

    constructor(name, dexterity) {
        super(name);
        this.dexterity = dexterity;
    }

    getBadge() {
        if (this.dexterity >= 5) {
            return `Master of arrows`;
        }

        return super.getBadge();
    }
}
