import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from './navLinks';

type Props = {
	mobile?: boolean;
};

export const NavItems: React.FC<Props> = ({ mobile }) => {
	let linkProps = navLinks;

	// filter out start page link on non mobile screens. It is reached by the logo, which is enough on such screens.
	if (!mobile) {
		linkProps = navLinks.filter((linkProp) => linkProp.link !== '/');
	}

	return (
		<nav>
			<ul className={clsx('flex', mobile ? 'flex-col gap-3' : 'gap-6')}>
				{linkProps.map((navItem) => (
					<li key={navItem.link}>
						<NavLink to={navItem.link}>{navItem.label}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
