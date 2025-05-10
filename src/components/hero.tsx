import React from 'react';
import { ImageService } from './image-services/image-service';
import { Button } from './image-services/button';
import { useNavigate } from 'react-router-dom';

type Props = {
	imageSrc: string;
};

export const Hero: React.FC<Props> = ({ imageSrc }) => {
	const navigate = useNavigate();

	const onClickCta = () => {
		navigate('/tjänster');
	};

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

			{/* Overlay for better contrast */}
			<div className="absolute inset-0 bg-black/40 z-10" />

			{/* Hero content */}
			<div className="relative h-full flex flex-col items-center justify-center z-10">
				<h1 className="text-5xl md:text-6xl mt-80 font-header">
					{/* text-accentColor-red */}
					RPM Bilsevice
				</h1>
				<p className="mt-4 text-lg md:text-xl">
					- din bilmekaniker i Malmö
				</p>
				<Button
					purpose="accent"
					text="Våra tjänster"
					onClick={onClickCta}
				/>
			</div>
		</section>
	);
};
