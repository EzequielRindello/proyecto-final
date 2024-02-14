import { loadHeaderAndFooter } from "./common.js";
import { fetchPrincipals } from "./GetPrincipals.js";
import { fetchSecondaryCharacters } from "./GetSecondary.js"
import { meAlert } from "./Alerts.js";

const principalsUrl = "https://rickandmortyapi.com/api/character/1,2,3,4,5";
const secondaryUrl = "https://rickandmortyapi.com/api/character/118,119,360,599,331,107";

fetchPrincipals(principalsUrl);
fetchSecondaryCharacters(secondaryUrl);

document.addEventListener('DOMContentLoaded', async () => {
    await loadHeaderAndFooter();
    meAlert();
});
