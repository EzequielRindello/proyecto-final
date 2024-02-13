export async function fetchSecondaryCharacters(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(console.warn(Error));
		}

		const secondaryCharacters = await response.json();
		secondaryCharactersGallery(secondaryCharacters);

	} catch (error) {
		console.error(error);
	}
}

function secondaryCharactersGallery(secondaryCharacters) {
	const galleryContainer = document.getElementById("secondary");

	secondaryCharacters.forEach(secondaryCharacters => {
		const characterDiv = document.createElement("div");
		characterDiv.classList.add("character");

		const imgageDiv = document.createElement("div")
		const imageElement = document.createElement("img");
		imageElement.src = secondaryCharacters.image;
		imageElement.alt = secondaryCharacters.name;
		imgageDiv.appendChild(imageElement);

		const infoDiv = document.createElement("div")
		infoDiv.classList.add("characters-info")
		const nameElement = document.createElement("h2");
		nameElement.textContent = secondaryCharacters.name;

		const genderElement = document.createElement("p");
		genderElement.textContent = secondaryCharacters.gender;

		const statusElement = document.createElement("p");
		statusElement.textContent = secondaryCharacters.status;
		infoDiv.appendChild(nameElement);
		infoDiv.appendChild(statusElement);
		infoDiv.appendChild(genderElement);

		characterDiv.appendChild(imgageDiv);
		characterDiv.appendChild(infoDiv);

		galleryContainer.appendChild(characterDiv);
	});
}