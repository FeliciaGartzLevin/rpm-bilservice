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
			<div className="flex flex-col w-full mt-16 font-header items-center text-3xl text-page-layout ">
				{/* <ThemePicker /> */}
				<NavItems
					mobile={screenWidth === 'xs' || screenWidth === 'sm'}
				/>
			</div>
		</section>
	);
};
