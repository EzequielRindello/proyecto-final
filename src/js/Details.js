export async function getLocation(id) {
    try {
        const urlLocation = `https://rickandmortyapi.com/api/location/${id}`;
        const response = await fetch(urlLocation);

        if (!response.ok) {
            throw new Error(console.warn(error));
        }

        const location = await response.json();
        console.log(location);

    } catch (error) {
        console.error(error);
    }
}

export async function getEpisode(id) {
    try {
        const urlEpisode = `https://rickandmortyapi.com/api/episode/${id}`;
        const response = await fetch(urlEpisode);

        if (!response.ok) {
            throw new Error(console.warn(error));
        }

        const episode = await response.json();
        console.log(episode);

    } catch (error) {
        console.error(error);
    }
}
