'use client';

import { useMenuContext } from '@/lib/menu-context';
import { navBarVariants } from './nav-bar';
import { cn } from '@/lib/utils';
import { Tlink, links } from '@/constants';
import Link from 'next/link';
import { motion } from 'framer-motion';
export function NavItems({
	linkStyles,
	containerStyles,
}: {
	linkStyles?: string;
	containerStyles?: string;
}) {
	const menu = useMenuContext();

	if (!menu) return null;

	const { close } = menu;

	return (
		<motion.nav
			variants={navBarVariants}
			initial='initial'
			animate='animate'
			onClick={close}
			className={cn(
				'group-hover:translate-x-0 relative grid content-center gap-10 transition-all duration-300 h-fit py-24 w-fit px-4 -translate-x-0 rounded-r-full',
				containerStyles
			)}>
			{links.map(({ name, href, Icon }: Tlink) => (
				<motion.li
					variants={navBarVariants}
					key={name + href}
					className='list-none'>
					<Link
						href={href}
						className='flex items-center gap-2 hover:text-teal-500 transition-colors duration-100 dark:hover:text-teal-400'>
						<Icon size={18} />
						<p
							className={cn(
								'group-hover:scale-x-100 scale-x-0 transition-transform duration-100 origin-left delay-200',
								linkStyles
							)}>
							{name}
						</p>
					</Link>
				</motion.li>
			))}
		</motion.nav>
	);
}
