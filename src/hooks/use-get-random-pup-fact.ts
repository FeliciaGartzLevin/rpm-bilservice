import { useEffect, useState } from 'react';
import { getRandomPupFact } from '../services/fetch-pup-fact';

export const useGetRandomPupFact = () => {
	const [pupFact, setPupFact] = useState<string[] | null>(null);

	const getFact = async () => {
		try {
			const fact = await getRandomPupFact();

			if (!fact) {
				throw new Error('No fact was fetched');
			}

			setPupFact(fact);
		} catch (error) {
			console.log('handle error');
		}
	};

	useEffect(() => {
		getFact();
	}, []);

	return pupFact;
};
