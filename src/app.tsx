import { About } from './pages/about';
import { Home } from './pages/home';
import { Footer } from './pages/partials/footer';
import { Navigation } from './pages/partials/header/navigation';
import { Routes, Route } from 'react-router-dom';
import { useThemeColors } from './hooks/use-theme-colors';
import './index.css';
import { Services } from './pages/services';

// handle padding to the sides and max-width for content (responsively)

export const App = () => {
	const cssClasses = useThemeColors();

	return (
		<div id="App" className={cssClasses}>
			<div className="bg-primary text-textColor-primary bg-backgroundColor-primary h-full">
				<div className="max-w-content mx-auto">
					<header className="w-full px-full-app-side-spacing">
						<Navigation />
					</header>

					<main className="px-full-app-side-spacing">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/tjänster" element={<Services />} />
							<Route path="/om-oss" element={<About />} />
						</Routes>
					</main>

					<footer className="h-[20%] w-full px-full-app-side-spacing">
						<Footer className={'h-20 py-full-app-py'} />
					</footer>
				</div>
			</div>
		</div>
	);
};
