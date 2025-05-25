import React from 'react';
import { SecondaryHero } from '../components/secondary-hero';
import { Heading } from '../components/heading';
import { ImageService } from '../components/image-service';

export const Services: React.FC = () => {
	return (
		<>
			<SecondaryHero imageSrc="car" alt="En röd bil med öppen motorhuv" />

			<section className="text-page-layout text-body-section-layout">
				<Heading tag="h2">Våra tjänster</Heading>
				<p>Vi utför många olika tjänster såsom:</p>
				<section className="text-xl my-5 font-semibold md:flex md:gap-16">
					<div>
						<p>Service</p>
						<p>Kamremsbyte</p>
						<p>Kamkedja</p>
						<p>Bromsar</p>
						<p>Fjädring</p>
					</div>
					<div>
						<p>Avgassystem</p>
						<p>Koppling</p>
						<p>Byte av motor</p>
						<p>med mera</p>
					</div>
				</section>
				<p>
					Vi kan allt! Bara <a href="#footer">kontakta oss</a> för
					frågor om det arbete ni vill ha utfört.
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
