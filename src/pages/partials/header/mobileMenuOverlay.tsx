import React from 'react';
import { NavItems } from './navItems';

type Props = {
	headerHeight: string;
};

export const MobileMenuOverlay: React.FC<Props> = ({ headerHeight }) => {
	return (
		<section
			className="bg-black absolute left-0 right-0 w-full"
			style={{ height: `calc(100vh - ${headerHeight})` }}
		>
			<div className="max-w-content mx-auto w-full px-full-app-side-spacing py-4">
				<NavItems mobile />
			</div>
		</section>
	);
};
