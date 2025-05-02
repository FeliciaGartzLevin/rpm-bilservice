import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';
import { MobileMenuOverlay } from './mobileMenuOverlay';

type Props = {
	className?: string;
};

export const Navigation: React.FC<Props> = ({ className }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(mobileMenuOpen ? false : true);
	};

	const iconSizing = '2.5rem';
	const headerHeight = '4rem';

	// TODO: use a hook or tailwind integration for checking what menu shall be shown

	return (
		<div className={clsx(className, mobileMenuOpen ? 'h-full z-10' : '')}>
			<section
				className={`flex justify-between items-center h-[${headerHeight}]`}
			>
				<div>
					<NavLink to="/">
						<img
							alt="logo"
							src="../../../favicon.ico"
							className="h-[3rem]"
						/>
					</NavLink>
				</div>

				{/* Show this if tablet and up */}
				{/* <NavItems /> */}

				{/* Show this if below tablet width */}
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
			</section>
			{mobileMenuOpen ? (
				<MobileMenuOverlay headerHeight={headerHeight} />
			) : null}
		</div>
	);
};
