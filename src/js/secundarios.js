import { loadHeaderAndFooter, fiterCharacterByName } from "./common.js";
import { renderSearch} from "./Search.js"
import { infoAlert } from "./Alerts.js";

loadHeaderAndFooter();

document.getElementById("search-form").addEventListener("submit", async function (event) {
  event.preventDefault(); // prevent form submission

  const characterName = document.getElementById("search-input").value;
  const characterList = await fiterCharacterByName(characterName);
  try {
    renderSearch(characterList.results);
  } catch (error) {
    console.warn("Not a valid input");
    alert("Error. Enter a valid character!");
  }
});

document.getElementById("info-alert").addEventListener("click", function () {
  infoAlert();
});