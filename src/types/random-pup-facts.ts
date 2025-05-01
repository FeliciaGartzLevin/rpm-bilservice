type PupFactsData = {
	facts: string[];
	success: boolean;
};

type PupFact = Pick<PupFactsData, 'facts'>;
