export class CharacterViewModel {
	constructor(model) {
		this.model = model;
	}

	getCharacterInfo() {
		return `${this.model.name} - ${this.model.status} - ${this.model.species}`;
	}

	getImageUrl() {
		return this.model.image;
	}
}
