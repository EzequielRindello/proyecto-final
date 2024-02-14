import { renderSearch } from "./Search";

function createRandomList() {
	const randomList = [];
	for (let i = 0; i < 20; i++) {
		let num = Math.floor(Math.random() * 827);
		randomList.push(num);
	}
	return randomList;
}

export async function displayRandom() {
	try {
		const list = createRandomList()
		const response = await fetch(`https://rickandmortyapi.com/api/character/${list}`);

		if (!response.ok) {
			throw new Error(console.warn(Error));
		}
		const data = await response.json();
		renderSearch(data);

	} catch (error) {
		console.error(error);
	}
}