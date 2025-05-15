import React from 'react';
import { SecondaryHero } from '../components/secondary-hero';

export const Services: React.FC = () => {
	return (
		<>
			<SecondaryHero imageSrc="car" alt="En röd bil med öppen motorhuv" />
			<section className="text-page-layout">tjänster dummy text</section>
		</>
	);
};
