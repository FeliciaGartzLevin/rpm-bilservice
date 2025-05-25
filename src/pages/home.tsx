import { Hero } from '../components/hero';
import { Heading } from '../components/heading';

export const Home = () => {
	return (
		<>
			<Hero imageSrc="hero" />

			<section className="text-page-layout">
				<Heading tag="h2">Service</Heading>
				hello, this is dummy home page content
			</section>
		</>
	);
};
