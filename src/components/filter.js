import { filterCharacters } from './components/filter.js';

const filterSelect = document.querySelector('#filter-type');
filterSelect.addEventListener('change', (event) => {
    const selectedType = event.target.value;
    const filteredCharacters = filterCharacters(characters, selectedType);
    new CharacterView(filteredCharacters).render();
});

export const filterCharacters = (characters, type) => {
    if (type === 'All') return characters;
    return characters.filter(character => character.constructor.type === type);
};
