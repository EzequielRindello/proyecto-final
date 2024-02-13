import {loadHeaderAndFooter,getFavorites} from "./common.js";
import {displayFavoritesGalery} from "./FavoritesGallery.js"

loadHeaderAndFooter();

const favorites = getFavorites();
displayFavoritesGalery(favorites);
