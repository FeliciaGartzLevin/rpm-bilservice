import { useEffect, useState } from 'react';
import { tailwindBreakpoints } from '../helpers/breakpoints';

export type ScreenWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const useScreenWidth = (): ScreenWidth => {
	const [screenWidth, setScreenWidth] = useState<ScreenWidth>('xs');

	useEffect(() => {
		//parse breakpoints
		const breakpoints = {
			sm: parseInt(tailwindBreakpoints.sm),
			md: parseInt(tailwindBreakpoints.md),
			lg: parseInt(tailwindBreakpoints.lg),
			xl: parseInt(tailwindBreakpoints.xl),
			twoXl: parseInt(tailwindBreakpoints.twoXl),
		};

		const handleResize = () => {
			const width = window.innerWidth;

			if (width < breakpoints.sm) setScreenWidth('xs');
			else if (width < breakpoints.md) setScreenWidth('sm');
			else if (width < breakpoints.lg) setScreenWidth('md');
			else if (width < breakpoints.xl) setScreenWidth('lg');
			else if (width < breakpoints.twoXl) setScreenWidth('xl');
			else setScreenWidth('2xl');
		};

		window.addEventListener('resize', handleResize);
		handleResize(); // Initial screen width check

		return () => window.removeEventListener('resize', handleResize); // clean up event listener to prevent memory leaks
	}, []);

	return screenWidth;
};
