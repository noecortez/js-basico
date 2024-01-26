export class CharacterService {
    async getCharacters() {
        try {
            const url = 'https://rickandmortyapi.com/api/character/';
            const response = await fetch(url);
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error fetching characters:', error);
            throw error;
        }
    }
}
