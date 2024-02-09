import { loadHeaderAndFooter, fiterCharacterByName } from "./common.js";
import { renderSearch, infoAlert } from "./Search.js"

loadHeaderAndFooter();

document.getElementById("search-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // prevent form submission

    const characterName = document.getElementById("search-input").value;
    const characterList = await fiterCharacterByName(characterName);
    try {
        infoDiv.appendChild(statusSpecies);
    } catch (error) {
        console.warn("Not a valid input")
    }
});

document.getElementById("info-alert").addEventListener("click", function () {
    infoAlert();
});