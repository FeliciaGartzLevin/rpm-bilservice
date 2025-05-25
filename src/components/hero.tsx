import React from 'react';
import { ImageService } from './image-service';
import { Button } from './button';
import { useNavigate } from 'react-router-dom';
import { Heading } from './heading';

type Props = {
	imageSrc: string;
};

export const Hero: React.FC<Props> = ({ imageSrc }) => {
	const navigate = useNavigate();

	const onClickCta = () => {
		navigate('/tjänster');
	};

	return (
		<section className="relative h-screen mb-10">
			{/* Hero image */}
			<div className="absolute left-0 z-0">
				<ImageService
					imageSrc={imageSrc}
					alt="Manlig bilmekaniker med svart T-shirt och svarta handskar jobbar framför en öppen motorhuv på en bil"
					className="h-screen w-screen object-cover"
					sizes="100vw"
				/>
			</div>

			{/* Overlay for better contrast */}
			<div className="absolute inset-0 bg-black/25 z-10" />

			{/* Hero content */}
			<div className="relative h-full flex flex-col items-center justify-center z-10 text-center">
				<Heading tag="h1" classes="mt-80 mb-1 md:mb-2">
					RPM Bilsevice
				</Heading>

				<p className="text-lg md:text-xl">- din bilmekaniker i Malmö</p>

				<Button
					purpose="accent"
					text="Våra tjänster"
					onClick={onClickCta}
				/>
			</div>
		</section>
	);
};
