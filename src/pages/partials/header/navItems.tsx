import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from './navLinks';

type Props = {
	mobile?: boolean;
};

export const NavItems: React.FC<Props> = ({ mobile }) => {
	return (
		<nav>
			<ul className={clsx('flex gap-2', mobile ? 'flex-col' : '')}>
				{navLinks.map((navItem) => (
					<li>
						<NavLink key={navItem.link} to={navItem.link}>
							{navItem.label}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
