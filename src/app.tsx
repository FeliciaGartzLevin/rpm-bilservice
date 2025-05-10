import { About } from './pages/about';
import { Home } from './pages/home';
import { Footer } from './pages/partials/footer';
import { Navigation } from './pages/partials/header/navigation';
import { Routes, Route } from 'react-router-dom';
import { useThemeColors } from './hooks/use-theme-colors';
import './index.css';
import { Services } from './pages/services';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

// handle padding to the sides and max-width for content (responsively)

export const App = () => {
	const cssClasses = useThemeColors();
	const location = useLocation();
	const isFullWidthPage = location.pathname === '/';

	return (
		<div id="App" className={cssClasses}>
			<div className="bg-primary text-textColor-primary bg-backgroundColor-primary min-h-full font-body">
				<header className="w-full z-20 fixed top-0">
					<Navigation />
				</header>

				<div
					className={clsx(
						isFullWidthPage ? '' : 'max-w-content mx-auto',
					)}
				>
					<main
						className={clsx(
							isFullWidthPage ? '' : 'px-full-app-side-spacing',
						)}
					>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/tjänster" element={<Services />} />
							<Route path="/om-oss" element={<About />} />
						</Routes>
					</main>
				</div>

				<footer className="h-[20%] w-full px-full-app-side-spacing">
					<Footer className={'h-20 py-full-app-py'} />
				</footer>
			</div>
		</div>
	);
};
