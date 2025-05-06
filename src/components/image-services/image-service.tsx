import React from 'react';
import { tailwindBreakpoints } from '../../helpers/breakpoints';

type Props = {
	imageSrc: string;
	alt: string;
	sizes: string;
	lazyLoading?: boolean;
};

export const ImageService: React.FC<Props> = ({
	imageSrc,
	alt,
	sizes,
	lazyLoading,
}) => {
	const { sm, lg, twoXl } = tailwindBreakpoints;
	const imagePath = 'public/images/';

	return (
		<picture>
			<source
				type="image/webp"
				srcSet={`
				${imagePath + imageSrc}-${sm}.webp ${sm}w,
				${imagePath + imageSrc}-${lg}.webp ${lg}w,
				${imagePath + imageSrc}-${twoXl}.webp ${twoXl}w
				`}
				sizes={sizes}
			/>
			<img
				src=""
				srcSet={`
				${imagePath + imageSrc}-${sm}.jpg ${sm}w,
				${imageSrc}-${lg}.jpg ${lg}w,
				${imageSrc}-${twoXl}.jpg ${twoXl}w
				`}
				alt={alt}
				sizes={sizes}
				loading={lazyLoading ? 'lazy' : 'eager'}
			/>
		</picture>
	);
};
