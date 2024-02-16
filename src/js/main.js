import { loadHeaderAndFooter, setFirstVisitLocalStorage, getFirstVisitLocalStorage } from "./common.js";
import { fetchPrincipals } from "./GetPrincipals.js";
import { fetchSecondaryCharacters } from "./GetSecondary.js"
import { meAlert, firstVisitAlert } from "./Alerts.js";

const principalsUrl = "https://rickandmortyapi.com/api/character/1,2,3,4,5";
const secondaryUrl = "https://rickandmortyapi.com/api/character/118,119,360,599,331,107";

document.addEventListener('DOMContentLoaded', async () => {
    await loadHeaderAndFooter();

    const firstVisit = getFirstVisitLocalStorage();
    if (!firstVisit) {
        firstVisitAlert();
        setFirstVisitLocalStorage();
    }

    fetchPrincipals(principalsUrl);
    fetchSecondaryCharacters(secondaryUrl);

    meAlert();
});
