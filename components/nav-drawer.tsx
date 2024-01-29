'use client';
import { Drawer } from '@material-tailwind/react';
import { NavItems } from './nav-bar';
import { X, Menu } from 'lucide-react';
import { useMenuContext } from '@/lib/menu-context';

export function MobileDrawer() {
	const menu = useMenuContext();

	if (!menu) return null;

	const { close, isOpen } = menu;

	return (
		<Drawer
			placement='left'
			placeholder={'drawer'}
			open={isOpen}
			onClose={close}
			className='p-4 bg-slate-50 dark:bg-slate-900 md:hidden w-[250px]'>
			<div className=' flex items-center justify-end text-black dark:text-white bg-slate-50 dark:bg-slate-900'>
				<button
					onClick={close}
					className='px-6 pt-6'>
					<X />
				</button>
			</div>
			<NavItems
				containerStyles={'py-6'}
				linkStyles='scale-x-100 hover:color-inherit'
			/>
		</Drawer>
	);
}

export function DrawerOpen() {
	const menu = useMenuContext();

	if (!menu) return null;
	const { open } = menu;

	return (
		<button
			className='text-black dark:text-white block md:hidden'
			onClick={open}>
			<Menu />
		</button>
	);
}
