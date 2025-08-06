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

	return (
		<div
			className={clsx(
				className,
				mobileMenuOpen
					? 'h-[100vh] bg-backgroundColor-primary text-textColor-primary'
					: '',
			)}
		>
			<div className="backdrop-filter backdrop-blur-lg bg-opacity-30 bg-primary fade-bottom">
				<section
					className={`flex justify-between text-page-layout font-header text-3xl md:text-xl items-center h-[${headerHeight}] text-textColor-primary`}
				>
					<Logo classes="h-[3rem]" />
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
			</div>

			{mobileMenuOpen ? (
				<MobileMenuOverlay
					headerHeight={headerHeight}
					closeMobileMenu={() => setMobileMenuOpen(false)}
				/>
			) : null}
		</div>
	);
};
