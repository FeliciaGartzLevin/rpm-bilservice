import React from 'react';
import { useLocation } from 'react-router-dom';
import { navLinks } from './header/navLinks';
import { Heading } from '../../components/heading';

export const PageTitle: React.FC = () => {
	const location = useLocation();

	const foundLink = navLinks.find(
		(navlink) => navlink.link === decodeURIComponent(location.pathname),
	);

	return (
		<div className="flex justify-center text-page-layout">
			<Heading tag="h1">
				{foundLink?.label || 'Välkommen till denna sida'}
			</Heading>
		</div>
	);
};
