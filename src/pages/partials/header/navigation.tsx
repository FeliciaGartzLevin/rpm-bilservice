import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { MobileMenuOverlay } from './mobileMenuOverlay';
import { NavItems } from './navItems';
import { useScreenWidth } from '../../../hooks/use-screen-width';
import Logo from '../../../components/logo';
import { ThemePicker } from '../../../components/themePicker';
import { useHeroVisibility } from '../../../hooks/use-is-hero-visible';

type Props = {
	className?: string;
};

export const Navigation: React.FC<Props> = ({ className }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(true);
	const location = useLocation();
	const screenWidth = useScreenWidth();
	const isHeroVisible = useHeroVisibility();

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

	return (
		<div
			className={clsx(
				className,
				isHeroVisible && !mobileMenuOpen
					? 'text-white'
					: 'text-textColor-primary',
				mobileMenuOpen ? 'h-[100vh] bg-backgroundColor-primary' : '',
			)}
		>
			<div
				className={`absolute top-0 left-0 backdrop-filter backdrop-blur-lg bg-primary fade-bottom h-[${headerHeight}] w-full z-0`}
			></div>
			<section
				className={`relative flex justify-between text-page-layout font-header text-3xl md:text-xl items-center h-[${headerHeight}] bg-transparent z-20`}
			>
				<Logo classes="h-[3rem] !opacity-100" />
				{screenWidth === 'xs' || screenWidth === 'sm' ? (
					<div
						onClick={toggleMobileMenu}
						title="menu-bar"
						role="button"
						className="flex items-center justify-center gap-10"
					>
						{mobileMenuOpen ? (
							<>
								<ThemePicker />
								<IoClose size={iconSizing} />
							</>
						) : (
							<FiMenu size={iconSizing} />
						)}
					</div>
				) : (
					<div className="flex gap-10">
						<NavItems />
						<ThemePicker />
					</div>
				)}
			</section>

			{mobileMenuOpen ? (
				<MobileMenuOverlay
					headerHeight={headerHeight}
					closeMobileMenu={() => setMobileMenuOpen(false)}
				/>
			) : null}
		</div>
	);
};
