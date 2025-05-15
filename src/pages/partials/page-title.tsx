import React from 'react';
import { useLocation } from 'react-router-dom';
import { navLinks } from './header/navLinks';

export const PageTitle: React.FC = () => {
	const location = useLocation();
	console.log('navlinks', navLinks);
	console.log('location', location);
	const foundLink = navLinks.find(
		(navlink) => navlink.link === decodeURIComponent(location.pathname),
	);

	return (
		<h1 className="flex justify-center text-center text-5xl md:text-6xl font-header text-page-layout">
			{foundLink?.label || 'Välkommen till denna sida'}
		</h1>
	);
};
