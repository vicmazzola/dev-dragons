import { Character } from "../modules/character.js";
import { showModal } from "./modal.js";


export class CharacterView {
    characters;
    selectedCharacters;

    constructor(characters) {
        this.ulCharacters = document.querySelector('ul#characters');
        this.characters = characters;
        this.selectedCharacters = [];
        this.listenToDuelEvent();
    }

    render() {
        this.ulCharacters.innerHTML = '';
        this.characters.forEach(character => {
            const characterLI = this.createCharacter(character);
            this.ulCharacters.appendChild(characterLI);
        });
    }

    createCharacter = (character) => {
        const characterLI = document.createElement('li');
        characterLI.classList.add('character', character.constructor.type);

        const isSelected = this.selectedCharacters.indexOf(character) !== -1; // Checks if the character is in the array

        if (isSelected) characterLI.classList.add('selected');

        characterLI.innerHTML = `
        <div class="upper-container">
            <div class="header">
                <div class="combat"></div>
                <div class="level">
                    <button class="decrease-level">-</button>
                    <p class="level-text">Level ${character.level}</p>
                    <button class="increase-level">+</button>
                </div>
            </div>
            <div class="image-container">
                <div class="image"></div>
                <div class="type-container">
                    <h2 class="type">${character.constructor.type}</h2>
                </div>
            </div>
            <div class="name-container">
                <h3 class="name">${character.name}</h3>
            </div>
            <div class="description-container">
                <p class="description">${character.constructor.description}</p>
            </div>
        </div>
        <div class="lower-container">
            <img src="./src/assets/img/icon-mana.png" class="icon-mana">
            <p class="badge">${character.getBadge()}</p>
            <img src="./src/assets/img/icon-health.png" class="icon-health">
            <h4 class="mana">${character.mana}</h4>
            <h4 class="health">${character.health}</h4>
        </div>
        `;

        const levelContainer = characterLI.querySelector('.level');
        levelContainer.onclick = (evt) => {
            evt.stopPropagation();

            if (evt.target.classList.contains('decrease-level')) character.levelDown();

            if (evt.target.classList.contains('increase-level')) character.levelUp();

            this.render();
        };

        characterLI.onclick = () => {
            const hasTwoSelected = this.selectedCharacters.length === 2;
            if (!hasTwoSelected || isSelected) {
                characterLI.classList.toggle('selected');

                if (!isSelected) return this.addSelection(character);

                this.removeSelection(character);
            }
        };

        return characterLI;
    };

    addSelection = (character) => {
        this.selectedCharacters.push(character);
        this.render();
    };

    removeSelection = (character) => {
        const characterIndexInArray = this.selectedCharacters.indexOf(character);
        this.selectedCharacters.splice(characterIndexInArray, 1);
        this.render();
    };

    listenToDuelEvent() {
        const duelButton = document.querySelector('.duel-button');

        duelButton.addEventListener('click', () => {
            if (this.selectedCharacters.length < 2) return showModal('Select 2 characters');

            const duelResult = Character.checkWinner(this.selectedCharacters[0], this.selectedCharacters[1]);

            showModal(duelResult);

            this.selectedCharacters.splice(0, this.selectedCharacters.length);

            this.render();
        });
    }
}

