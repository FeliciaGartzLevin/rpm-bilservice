import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useHeroVisibility = (): boolean => {
	const [isHeroVisible, setIsHeroVisible] = useState(true);
	const location = useLocation();

	useEffect(() => {
		// only excecute on the start page

		if ('/' !== decodeURIComponent(location.pathname)) {
			setIsHeroVisible(false);
			return;
		}

		const handleScroll = () => {
			console.log('location.pathname', location.pathname);
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;
			setIsHeroVisible(scrollY < windowHeight);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // in case user has already scrolled on mount

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [location.pathname]);

	return isHeroVisible;
};
