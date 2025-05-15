import React from 'react';
import { ImageService } from './image-service';
import { PageTitle } from '../pages/partials/page-title';

type Props = {
	imageSrc: string;
	alt: string;
};

export const SecondaryHero: React.FC<Props> = ({ imageSrc, alt }) => {
	return (
		<section className="pt-16">
			{/* Page title */}
			<PageTitle />
			{/* Hero image */}
			<div className="bg-black/40 z-10 my-16">
				<ImageService
					imageSrc={imageSrc}
					alt={alt}
					className={
						'w-screen object-cover min-h-96 max-h-[70vh] md:h-56 lg:max-h-44'
					}
					sizes="100vw"
				/>
			</div>
		</section>
	);
};
