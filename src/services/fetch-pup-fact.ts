import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://dog-api.kinduff.com/api/facts',
	timeout: 0,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

/**
 * Generic get
 *
 * @param number - amount of desired facts
 * @returns
 */
const get = async <T>(number?: string) => {
	const response = await instance.get<T>(number ? `?number=${number}` : '');

	return response.data as T;
};

export const getRandomPupFact = async () => {
	const data = await get<PupFactsData>();

	if (!data.success) {
		throw new Error("Dogfact couldn't be fetched");
	}

	return data.facts;
};
