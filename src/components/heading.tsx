import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import { HeadingTag } from '../types/heading-tag';

type Props = {
	tag: HeadingTag;
	children: ReactNode;
	classes?: string;
};

export const Heading: FC<Props> = ({ tag, children, classes }) => {
	const Tag = tag;

	return (
		<Tag
			className={clsx(
				'font-header',
				{
					h1: 'text-5xl mb-8 md:text-6xl md:mb-10',
					h2: 'text-3xl mb-6 md:text-4xl md:mb-8',
					h3: 'text-2xl mb-5 md:text-3xl md:mb-6',
					h4: 'text-xl mb-4 md:text-2xl md:mb-5',
					h5: 'text-lg mb-3 md:text-xl md:mb-4',
					h6: 'text-base mb-2 md:text-lg md:mb-3',
				}[tag],
				classes,
			)}
		>
			{children}
		</Tag>
	);
};
