import { Hero } from '../components/hero';
import { Heading } from '../components/heading';
import { ImageService } from '../components/image-service';

export const Home = () => {
	return (
		<>
			<Hero
				imageAlt="Manlig bilmekaniker med svart T-shirt och svarta handskar jobbar framför en öppen motorhuv på en bil"
				imageSrc="hero"
			/>

			<section className="text-page-layout text-body-section-layout">
				<Heading tag="h2">Service</Heading>
				<p>
					Car ipsum dolor sit amet fuel tank spoiler. Blinker street
					petrol gasoline station wagon kammback two-door rearview
					mirror. Expressway cross-over compact moped minivan
					navigation gas-electric. Speedometer gear garage fuel gauge
					spider horsepower hard top steering wheel. Wheelbase
					dashboard taxi cab cross-over trunk differential. Auto
					street station wagon cabriolet boot.
				</p>
			</section>

			<section>
				<ImageService
					imageSrc="workshop"
					alt="En vy över en bilverkstad med svagt gula väggar, en bilramp, några maskiner och en trappa upp till andra våningen. I förgrunden syns en orange vägkon med reflexer."
					className="w-screen object-cover max-h-[80vh]"
					sizes="100vw"
				/>
			</section>

			<section className="text-page-layout text-body-section-layout">
				<Heading tag="h2">Kammback</Heading>
				<p>
					Car ipsum dolor sit amet fuel tank spoiler. Blinker street
					petrol gasoline station wagon kammback two-door rearview
					mirror. Expressway cross-over compact moped minivan
					navigation gas-electric. Speedometer gear garage fuel gauge
					spider horsepower hard top steering wheel. Wheelbase
					dashboard taxi cab cross-over trunk differential. Auto
					street station wagon cabriolet boot.
				</p>
			</section>
		</>
	);
};
