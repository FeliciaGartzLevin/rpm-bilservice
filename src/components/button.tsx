import clsx from 'clsx';
import React from 'react';

type Props = {
	purpose: 'accent' | 'normal';
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	text: string;
};

export const Button: React.FC<Props> = ({ purpose, onClick, text }) => {
	return (
		<button
			className={clsx(
				'mt-6 px-7 py-3 rounded-xl font-header text-2xl hover-animation-effect',
				purpose === 'accent'
					? 'bg-button-red hover:bg-button-red-hover text-hero'
					: 'bg-accentColor-light',
			)}
			onClick={onClick}
			type="button"
		>
			{text}
		</button>
	);
};
