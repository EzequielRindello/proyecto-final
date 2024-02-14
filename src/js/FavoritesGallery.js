import { saveFavorites } from "./common.js";

export function displayFavoritesGalery(favoritesSaved) {
	const galeryDiv = document.getElementById("favorites-div");
	galeryDiv.innerHTML = "";

	favoritesSaved.forEach(favorite => {
		const favoriteContainer = document.createElement("div");
		favoriteContainer.classList.add("favorite-container");

		const favCharacter = document.createElement("div");
		favCharacter.classList.add("fav-character");

		const imageDiv = document.createElement("div");
		const imageElement = document.createElement("img");
		imageElement.src = favorite.image;
		imageElement.alt = favorite.name;
		imageElement.loading = "lazy";

		const favCharacterInfo = document.createElement("div");
		favCharacterInfo.classList.add("fav-character-info");

		const nameElement = document.createElement("h2");
		nameElement.textContent = favorite.name;

		const removeButton = document.createElement("i");
		removeButton.innerHTML = `<i class="bi bi-x-lg"></i>`;
		removeButton.onclick = function () {
			removeFavorite(favorite, favoritesSaved);
			saveFavorites(favoritesSaved); // lo guardo una vez modificado
		};

		imageDiv.appendChild(imageElement);
		favCharacter.appendChild(imageDiv);

		favCharacterInfo.appendChild(nameElement);
		favCharacterInfo.appendChild(removeButton);
		favCharacter.appendChild(favCharacterInfo);

		favoriteContainer.appendChild(favCharacter);

		galeryDiv.appendChild(favoriteContainer);
	});
}


export function removeFavorite(object, favoritesSaved) {
	// buscar el indice del objeto en la lista
	// si el objeto se encuentra retorna true si no se encuentra retorna -1
	const index = favoritesSaved.findIndex(favorite => favorite.id === object.id);

	//si existe, eliminar
	if (index !== -1) { // si el index es diferente de -1 significa que el objeto fue encontrado en la lista.
		favoritesSaved.splice(index, 1);
		alert(`${object.name} has been removed!`);
	} else {
		console.warn(`${object.name} was not found in favorites!`);
	}

	// actualizar la visualización de favoritos
	displayFavoritesGalery(favoritesSaved);
}
