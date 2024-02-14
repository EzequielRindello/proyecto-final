import { addToFavorites } from "./common.js";
// render funtions
export function renderSearch(characterslist) {
	const searchDiv = document.getElementById("buscador");
	searchDiv.innerHTML = "";

	characterslist.forEach(characterslist => {
		const characterDiv = document.createElement("div");
		characterDiv.classList.add("character");

		// favorites btn 
		const favoritesBtn = document.createElement("button");
		favoritesBtn.classList.add("favorites-btn");
		favoritesBtn.innerHTML = `<i class="bi bi-star-fill"></i>`;
		favoritesBtn.onclick = function () {
			addToFavorites(characterslist);
		};

		const imgageDiv = document.createElement("div")
		const imageElement = document.createElement("img");
		imageElement.src = characterslist.image;
		imageElement.alt = characterslist.name;
		imageElement.loading = "lazy";
		imgageDiv.appendChild(imageElement);

		const infoDiv = document.createElement("div")
		infoDiv.classList.add("characters-full-info")
		const nameElement = document.createElement("h2");
		nameElement.textContent = characterslist.name;

		const statusOrigin = document.createElement("p");
		statusOrigin.textContent = `Origin: ${characterslist.origin.name}`;

		const genderElement = document.createElement("p");
		genderElement.textContent = `Gender: ${characterslist.gender}`;

		const statusElement = document.createElement("p");
		statusElement.textContent = `Status: ${characterslist.status}`;

		const statusSpecies = document.createElement("p");
		statusSpecies.textContent = `Species: ${characterslist.species}`;

		const statusUrl = document.createElement("a");
		const space = document.createElement("br");
		statusUrl.textContent = "JSON info";
		statusUrl.href = `${characterslist.url}`

		infoDiv.appendChild(nameElement);
		infoDiv.appendChild(statusOrigin);
		infoDiv.appendChild(statusElement);
		infoDiv.appendChild(genderElement);
		infoDiv.appendChild(statusSpecies);
		infoDiv.appendChild(space);
		infoDiv.appendChild(statusUrl);

		characterDiv.appendChild(imgageDiv);
		characterDiv.appendChild(infoDiv);
		characterDiv.appendChild(favoritesBtn);

		searchDiv.appendChild(characterDiv);
	});
}
