import { NavLink } from 'react-router-dom';

type Props = {
	className?: string;
};

export const Navigation: React.FC<Props> = ({ className }) => {
	return (
		<ul className={`${className} flex justify-between`}>
			<li>
				<NavLink to="/">PupFacts</NavLink>
			</li>
			<li>
				<NavLink to="/about">About</NavLink>
			</li>
		</ul>
	);
};
