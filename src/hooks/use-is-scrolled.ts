import { useEffect, useState } from 'react';

export const useIsScrolled = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const threshold = 0;

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > threshold);
		};

		handleScroll(); // Set initial value

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [threshold]);

	return isScrolled;
};
