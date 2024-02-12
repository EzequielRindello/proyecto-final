import {addToFavorites} from "./common.js";
// fetch personal uses for debug
export async function getLocation() {
    try {
        const urlLocation = `https://rickandmortyapi.com/api/location/`;
        const response = await fetch(urlLocation);

        if (!response.ok) {
            throw new Error(console.warn(error));
        }

        const location = await response.json();
        console.log(location);

    } catch (error) {
        console.error(error);
    }
}

export async function getEpisode() {
    try {
        const urlEpisode = `https://rickandmortyapi.com/api/episode/`;
        const response = await fetch(urlEpisode);

        if (!response.ok) {
            throw new Error(console.warn(error));
        }

        const episode = await response.json();
        console.log(episode);

    } catch (error) {
        console.error(error);
    }
}

export async function getPrincipals() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5");

        if (!response.ok) {
            throw new Error(console.warn(Error));
        }

        const characters = await response.json();
        mainCharactersGallery(characters);

    } catch (error) {
        console.error(error);
    }
}

// display details of main characters
function mainCharactersGallery(characterslist) {
    const searchDiv = document.getElementById("main-characters-info");

    characterslist.forEach(characterslist => {
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("character");

        // favorites btn 
        const favoritesBtn = document.createElement("button");
        favoritesBtn.classList.add("favorites-btn");
        favoritesBtn.innerHTML = `<i class="bi bi-star-fill"></i>`;
        favoritesBtn.onclick = function() {
            addToFavorites(characterslist);
        };

        const imgageDiv = document.createElement("div")
        const imageElement = document.createElement("img");
        imageElement.src = characterslist.image;
        imageElement.alt = characterslist.name;
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
        statusUrl.href = `${characterslist.url}`;
        statusUrl.target = "_blank";

        infoDiv.appendChild(nameElement);
        infoDiv.appendChild(statusOrigin);
        infoDiv.appendChild(statusElement);
        infoDiv.appendChild(genderElement);
        infoDiv.appendChild(statusSpecies);
        infoDiv.appendChild(space);
        infoDiv.appendChild(statusUrl);
        infoDiv.appendChild(favoritesBtn);

        characterDiv.appendChild(imgageDiv);
        characterDiv.appendChild(infoDiv);
        characterDiv.appendChild(favoritesBtn);

        searchDiv.appendChild(characterDiv);
    });
}
