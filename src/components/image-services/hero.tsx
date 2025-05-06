import React from 'react';
import { ImageService } from './image-service';

type Props = {
	imageSrc: string;
};

export const Hero: React.FC<Props> = ({ imageSrc }) => {
	return (
		<div className="h-full w-full">
			<ImageService
				imageSrc={imageSrc}
				alt="Manlig bilmekaniker med svart T-shirt och svarta handskar jobbar framför en öppen motorhuv på en bil"
				sizes="100vw"
			/>
		</div>
	);
};
