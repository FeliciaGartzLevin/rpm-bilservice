import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { MobileMenuOverlay } from './mobileMenuOverlay';
import { NavItems } from './navItems';
import { useScreenWidth } from '../../../hooks/use-screen-width';
import Logo from '../../../components/logo';

type Props = {
	className?: string;
};

export const Navigation: React.FC<Props> = ({ className }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(true);
	const location = useLocation();
	const screenWidth = useScreenWidth();

	// Close the mobile menu on navigation
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		setMobileMenuOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		if (!(screenWidth === 'xs' || screenWidth === 'sm')) {
			setMobileMenuOpen(false);
		}
	}, [screenWidth]);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(mobileMenuOpen ? false : true);
	};

	const iconSizing = '2.5rem';
	const headerHeight = '4rem';

	// TODO: use a hook or tailwind integration for checking what menu shall be shown

	return (
		<div
			className={clsx(
				className,
				mobileMenuOpen ? 'h-[100vh] bg-backgroundColor-primary' : '',
			)}
		>
			<section
				className={`flex justify-between text-page-layout font-header text-3xl md:text-xl items-center h-[${headerHeight}]`}
			>
				<Logo classes="h-[3rem]" />
				{screenWidth === 'xs' || screenWidth === 'sm' ? (
					<div
						onClick={toggleMobileMenu}
						title="menu-bar"
						role="button"
						className="flex items-center justify-center"
					>
						{mobileMenuOpen ? (
							<IoClose size={iconSizing} />
						) : (
							<FiMenu size={iconSizing} />
						)}
					</div>
				) : (
					<div>
						<NavItems />
					</div>
				)}
			</section>

			{mobileMenuOpen ? (
				<MobileMenuOverlay headerHeight={headerHeight} />
			) : null}
		</div>
	);
};
