import { createContext, useContext } from 'react';

const menuContext = createContext<{
	isOpen: boolean;
	open: () => void;
	close: () => void;
} | null>(null);

export const { Provider: MenuContextProvider } = menuContext;

export const useMenuContext = () => useContext(menuContext);
