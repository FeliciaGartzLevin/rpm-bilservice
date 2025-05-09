import React from 'react';
import { ImageService } from './image-service';

type Props = {
	imageSrc: string;
};

export const Hero: React.FC<Props> = ({ imageSrc }) => {
	return (
		<section className="relative h-screen">
			{/* Hero image */}
			<div className="absolute left-0 z-0">
				<ImageService
					imageSrc={imageSrc}
					alt="Manlig bilmekaniker med svart T-shirt och svarta handskar jobbar framför en öppen motorhuv på en bil"
					className="h-screen w-screen object-cover"
					sizes="100vw"
				/>
			</div>

			{/* Hero content */}
			<div className="relative h-full flex flex-col items-center justify-center z-10">
				<h1 className="text-4xl md:text-6xl font-bold mt-80">
					RPM Bilsevice
				</h1>
				<p className="mt-4 text-lg md:text-xl">
					- din bilmekaniker i Malmö
				</p>
				<button className="mt-6 px-6 py-3 bg-accentColor-red rounded ">
					Våra tjänster
				</button>
			</div>
		</section>
	);
};
