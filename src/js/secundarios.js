import { loadHeaderAndFooter, fiterCharacterByName } from "./common.js";
import { renderSearch } from "./Search.js"
import { infoAlert } from "./Alerts.js";
import { displayRandom } from "./GetRamdom.js";
import Swal from 'sweetalert2'

loadHeaderAndFooter();

document.getElementById("search-form").addEventListener("submit", async function (event) {
  event.preventDefault(); // prevent form submission

  const characterName = document.getElementById("search-input").value;
  const characterList = await fiterCharacterByName(characterName);
  try {
    renderSearch(characterList.results);
  } catch (error) {
    console.warn("Not a valid input");
    Swal.fire({
      title: 'Warning!',
      text: `Error. Enter a valid character!`,
      icon: 'error',
      confirmButtonText: 'Aww, geez!'
    })
  }
});

document.getElementById("info-alert").addEventListener("click", function () {
  infoAlert();
});

document.getElementById("random").addEventListener("click", () => {
  displayRandom();
})