import React from 'react';
import { tailwindBreakpoints } from '../../helpers/breakpoints';

type Props = {
	imageSrc: string;
	alt: string;
	sizes: string;
	lazyLoading?: boolean;
	className: string;
};

export const ImageService: React.FC<Props> = ({
	imageSrc,
	alt = 'image',
	sizes,
	lazyLoading,
	className = '',
}) => {
	const { sm, lg, twoXl } = tailwindBreakpoints;
	const imagePath = 'public/images/';

	return (
		<picture className="object-cover h-full">
			<source
				type="image/webp"
				srcSet={`
				${imagePath + imageSrc}-${sm}.webp ${sm}w,
				${imagePath + imageSrc}-${lg}.webp ${lg}w,
				${imagePath + imageSrc}-${twoXl}.webp ${twoXl}w
				`}
				sizes={sizes}
				className={className}
			/>
			<source
				type="image/jpeg"
				srcSet={`
					/images/${imageSrc}-640.jpg 640w,
					/images/${imageSrc}-1024.jpg 1024w,
					/images/${imageSrc}-1600.jpg 1600w
				`}
				sizes={sizes}
				className={className}
			/>
			<img
				srcSet={`
				${imagePath + imageSrc}-${sm}.jpg ${sm}w,
				${imageSrc}-${lg}.jpg ${lg}w,
				${imageSrc}-${twoXl}.jpg ${twoXl}w
				`}
				alt={alt}
				sizes={sizes}
				loading={lazyLoading ? 'lazy' : 'eager'}
				className={className}
			/>
		</picture>
	);
};
