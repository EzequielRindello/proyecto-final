
export async function fetchPrincipals(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(console.warn(Error));
    }

    const characters = await response.json();
    createCharacterGallery(characters);

  } catch (error) {
    console.error(error);
  }
}

function createCharacterGallery(characters) {
  const galleryContainer = document.getElementById("principals");

  characters.forEach(character => {
    const characterDiv = document.createElement("div");
    characterDiv.classList.add("character");

    const imgageDiv = document.createElement("div")
    const imageElement = document.createElement("img");
    imageElement.src = character.image;
    imageElement.alt = character.name;
    imgageDiv.appendChild(imageElement);

    const infoDiv = document.createElement("div")
    infoDiv.classList.add("characters-info")
    const nameElement = document.createElement("h2");
    nameElement.textContent = character.name;

    const genderElement = document.createElement("p");
    genderElement.textContent = character.gender;

    const statusElement = document.createElement("p");
    statusElement.textContent = character.status;
    infoDiv.appendChild(nameElement);
    infoDiv.appendChild(statusElement);
    infoDiv.appendChild(genderElement);

    characterDiv.appendChild(imgageDiv);
    characterDiv.appendChild(infoDiv);

    galleryContainer.appendChild(characterDiv);
  });
}