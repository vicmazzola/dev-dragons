import { Character } from "./modules/character.js";
import { CharacterView } from "./components/character-view.js";
import { Mage } from "./modules/mage.js";
import { Archer } from "./modules/archer.js";
import { ArcherMage } from "./modules/archer-mage.js";
import { Warrior } from "./modules/warrior.js";


const mageAntonio = new Mage('Antonio', 4, 'fire', 4, 3);
const mageJulia = new Mage('Julia', 8, 'ice', 7, 10);
const archerBruno = new Archer('Bruno', 7, 8);
const archerMageChico = new ArcherMage('Chico', 7, 10, 'air', 4, 8);
const warriorJorge = new Warrior('Jorge', 8);

//archerBruno.#level = 15

const characters = [mageAntonio, mageJulia, archerBruno, archerMageChico, warriorJorge];

new CharacterView(characters).render();

console.log(Character.checkWinner(archerBruno, mageAntonio));

console.log(archerBruno);
