export class CharacterView {
	constructor(viewModel) {
		this.viewModel = viewModel;
	}

	render() {
		const characterContainer = document.createElement('div');
		characterContainer.classList.add('character-container');

		const characterInfo = document.createElement('p');
		characterInfo.textContent = this.viewModel.getCharacterInfo();

		const characterImage = document.createElement('img');
		characterImage.src = this.viewModel.getImageUrl();

		characterContainer.appendChild(characterInfo);
		characterContainer.appendChild(characterImage);

		return characterContainer;
	}
}
