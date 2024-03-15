import Swal from 'sweetalert2'
// header and footer utils
export async function loadHeaderAndFooter() {
  try {
    const headerTemplate = await loadTemplate("/partials/header.html");
    const headerElement = document.getElementById("header-dinamico");
    const footerTemplate = await loadTemplate("/partials/footer.html");
    const footerElement = document.getElementById("footer-dinamico");

    await Promise.all([
      renderWithTemplate(headerTemplate, headerElement),
      renderWithTemplate(footerTemplate, footerElement)
    ]);
  } catch (error) {
    return
  }
}

export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML("afterbegin", template);
  if (callback) {
    callback(data);
  }
}

async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

// filter characters funtions
export async function fiterCharacterByNameAndStatus(characterName, characterStatus) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${characterName}&status=${characterStatus}`);
    if (!response.ok) {
      throw new Error(console.warn(Error));
    }

    const list = await response.json();
    console.log(list);

  } catch (error) {
    console.error(error);
  }
}

export async function fiterCharacterByName(characterName) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${characterName}`);
    if (!response.ok) {
      throw new Error(console.warn(Error));
    }

    const list = await response.json();
    return list;

  } catch (error) {
    console.error(error);
    return null;
  }
}

// localStorage utils

export function setFirstVisitLocalStorage() {
  if (!localStorage.getItem("first-visit")) {
    localStorage.setItem("first-visit", new Date().toISOString());
  }
}

export function getFirstVisitLocalStorage() {
  return localStorage.getItem("first-visit");
}

export function getFavorites() {
  let favorites = localStorage.getItem("favorites");
  if (!favorites) {
    return [];
  }
  return JSON.parse(favorites);
}

export function saveFavorites(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function addToFavorites(object) {

  const favorites = getFavorites();

  // verificar si el objeto ya está en la lista de favoritos
  const isAlreadyFavorite = favorites.some(favorite => favorite.id === object.id);

  if (isAlreadyFavorite) {
    Swal.fire({
      title: 'Warning!',
      text: `${object.name} is already in favorites!`,
      icon: 'error',
      confirmButtonText: 'Aww, geez!'
    })
    return; // salir de la función si el objeto ya está en la lista de favoritos
  }

  // si el objeto no está en la lista de favoritos, agregarlo
  favorites.push(object);
  saveFavorites(favorites);
  Swal.fire({
    title: 'And that\'s the wayyyyy the news goes!',
    text: `${object.name} has been added to favorites!`,
    icon: 'success',
    confirmButtonText: 'Get Schwifty!'
  })
}
