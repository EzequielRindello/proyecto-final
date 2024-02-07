import { loadHeaderAndFooter } from "./common.js";
import { fetchPrincipals } from "./GetPrincipals.js";
import { fetchSecondaryCharacters } from "./GetSecondary.js"

const principalsUrl = "https://rickandmortyapi.com/api/character/1,2,3,4,5";
const secondaryUrl = "https://rickandmortyapi.com/api/character/118,119,244,599,331,107";

loadHeaderAndFooter();
fetchPrincipals(principalsUrl);
fetchSecondaryCharacters(secondaryUrl);
