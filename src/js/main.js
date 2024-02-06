import { loadHeaderAndFooter } from "./common.js";
import { fetchPrincipals } from "./GetPrincipals.js";

const principalsUrl = "https://rickandmortyapi.com/api/character/[1,2,3,4,5]";
// secundarios url

loadHeaderAndFooter();
fetchPrincipals(principalsUrl);
//secundarios action