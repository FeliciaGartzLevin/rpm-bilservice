import { FC } from 'react';
import { Heading } from './heading';
import { IoCarSportSharp } from 'react-icons/io5';
import { HeadingTag } from '../types/heading-tag';

type Props = {
	title: string;
	content: string;
	tag: HeadingTag;
};

export const InfoBullet: FC<Props> = ({ title, content, tag }) => {
	return (
		<div className="my-3 ps-4">
			<Heading tag={tag} classes="flex gap-3">
				<IoCarSportSharp size={28} /> {title}
			</Heading>
			<p>{content}</p>
		</div>
	);
};
