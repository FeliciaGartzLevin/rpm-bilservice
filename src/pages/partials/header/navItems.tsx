import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from './navLinks';

type Props = {
	mobile?: boolean;
	closeMobileMenu?: () => void;
};

export const NavItems: React.FC<Props> = ({ mobile, closeMobileMenu }) => {
	let linkProps = navLinks;

	// filter out start page link on non mobile screens. It is reached by the logo, which is enough on such screens.
	if (!mobile) {
		linkProps = navLinks.filter((linkProp) => linkProp.link !== '/');
	}

	return (
		<nav>
			<ul className={clsx('flex', mobile ? 'flex-col gap-5' : 'gap-8')}>
				{linkProps.map((navItem) => (
					<li key={navItem.link}>
						{navItem.link.includes('#') ? (
							<a
								href={navItem.link}
								className="hover:text-accentColor-strong"
								onClick={closeMobileMenu}
							>
								{navItem.label}
							</a>
						) : (
							<NavLink
								to={navItem.link}
								className="hover:text-accentColor-strong"
							>
								{navItem.label}
							</NavLink>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};
