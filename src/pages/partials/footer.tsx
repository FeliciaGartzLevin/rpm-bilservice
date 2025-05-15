type Props = {
	className?: string;
};

export const Footer: React.FC<Props> = ({ className }) => {
	return (
		<section className={className + ' text-page-layout'}>Footer</section>
	);
};
