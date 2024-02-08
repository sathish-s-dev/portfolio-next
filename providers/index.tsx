'use client';
import React, { ReactNode } from 'react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { MenuContextProvider } from '@/lib/menu-context';

import { ToastContainer, toast } from 'react-toastify';

const Providers = ({ children, ...props }: ThemeProviderProps) => {
	const [open, setOpen] = React.useState(false);
	const openDrawerLeft = () => {
		setOpen(true);
		console.log('open');
	};
	const closeDrawerLeft = () => setOpen(false);
	return (
		<NextThemesProvider {...props}>
			<MenuContextProvider
				value={{ isOpen: open, open: openDrawerLeft, close: closeDrawerLeft }}>
				{children}
				
			</MenuContextProvider>
		</NextThemesProvider>
	);
};

export default Providers;
