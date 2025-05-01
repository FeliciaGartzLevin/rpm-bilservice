import { useState } from 'react';

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
	const [storedValue, setStoredValue] = useState<T>(() => {
		// get value from localStorage and parse it from JSON
		const value = window.localStorage.getItem(key);

		return value ? JSON.parse(value) : defaultValue;
	});

	const setValue = (value: T) => {
		setStoredValue(value);

		// convert value to JSON and save in localStorage
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return [storedValue, setValue] as const;
};
