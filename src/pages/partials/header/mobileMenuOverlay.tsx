import React from 'react';
import { NavItems } from './navItems';
import { ThemePicker } from '../../../components/themePicker';

type Props = {
	headerHeight: string;
};

export const MobileMenuOverlay: React.FC<Props> = ({ headerHeight }) => {
	return (
		<section
			className="bg-backgroundColor-primary absolute left-0 right-0 w-full"
			style={{ height: `calc(100vh - ${headerHeight})` }}
		>
			<div className="flex flex-col max-w-content mx-auto w-full px-full-app-side-spacing py-4">
				<ThemePicker />
				<NavItems mobile />
			</div>
		</section>
	);
};
