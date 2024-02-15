import { Character } from './models/character.js';
import { CharacterService } from './services/characterService.js';
import { CharacterViewModel } from './viewmodels/characterViewModel.js';
import { CharacterView } from './views/characterView.js';

async function fetchDataAndRender() {
    const characterService = new CharacterService();

    try {
        const charactersData = await characterService.getCharacters();

        const characters = charactersData.map(character => {
            const characterModel = new Character(
                character.id,
                character.name,
                character.status,
                character.species,
                character.type,
                character.gender,
                character.origin,
                character.location,
                character.image,
                character.episode,
                character.url,
                character.created
            );

            const characterViewModel = new CharacterViewModel(characterModel);
            const characterView = new CharacterView(characterViewModel);

            return characterView.render();
        });

        const app = document.getElementById('app');
        characters.forEach(character => app.appendChild(character));
    } catch (error) {
        // manejador error
    }
}

fetchDataAndRender();
