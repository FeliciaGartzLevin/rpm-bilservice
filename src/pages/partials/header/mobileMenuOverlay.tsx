import React from 'react';
import { NavItems } from './navItems';
import { useScreenWidth } from '../../../hooks/use-screen-width';

type Props = {
	headerHeight: string;
};

export const MobileMenuOverlay: React.FC<Props> = ({ headerHeight }) => {
	const screenWidth = useScreenWidth();

	return (
		<section
			className="bg-backgroundColor-primary absolute left-0 right-0 w-full"
			style={{ height: `calc(100vh - ${headerHeight})` }}
		>
			<div className="flex flex-col max-w-content mx-auto w-full px-full-app-side-spacing py-4 mt-4 font-header">
				{/* <ThemePicker /> */}
				<NavItems
					mobile={screenWidth === 'xs' || screenWidth === 'sm'}
				/>
			</div>
		</section>
	);
};
