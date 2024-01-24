'use client';
import {
	Home,
	HomeIcon,
	Activity,
	Briefcase,
	Layers3,
	BadgeInfo,
	Phone,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { motion, spring } from 'framer-motion';
import { cn } from '@/lib/utils';

export const variants = {
	initial: {
		opacity: 0,
		x: -50,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			staggerChildren: 0.2,
			when: 'beforeChildren',
			stiffness: 200,
		},
	},
};

const NavBar = () => {
	return (
		<motion.aside
			variants={variants}
			initial='initial'
			animate='animate'
			className='group md:flex hidden h-screen z-[2]  fixed justify-center items-center hover:cursor-pointer'>
			<div className='absolute nav_mask h-full w-48 left-0 py-24 dark:bg-slate-900 bg-slate-100 -translate-x-32 group-hover:-translate-x-12 transition-all duration-500 rounded-r-3xl' />
			<NavItems />
		</motion.aside>
	);
};

export default NavBar;

export function NavItems({
	linkStyles,
	containerStyles,
}: {
	linkStyles?: string;
	containerStyles?: string;
}) {
	const links = [
		{
			name: 'Home',
			href: '/',
			Icon: Home,
		},
		{
			name: 'About',
			href: '#about',
			Icon: BadgeInfo,
		},
		{
			name: 'skills',
			href: '#skills',
			Icon: Layers3,
		},
		// {
		// 	name: 'Experience',
		// 	href: '#experiance',
		// 	Icon: Briefcase,
		// },
		{
			name: 'Projects',
			href: '#projects',
			Icon: Activity,
		},
		{
			name: 'Contact',
			href: '#contact',
			Icon: Phone,
		},
	];

	return (
		<motion.nav
			variants={variants}
			initial='initial'
			animate='animate'
			className={cn(
				'group-hover:translate-x-0 relative grid content-center gap-10 transition-all duration-300 h-fit py-24 w-fit px-4 -translate-x-0 rounded-r-full',
				containerStyles
			)}>
			{links.map(({ name, href, Icon }: any) => (
				<motion.li
					variants={variants}
					key={name + href}
					className='list-none'>
					<Link
						href={href}
						className='flex items-center gap-2 hover:text-sky-500 transition-colors duration-100 dark:hover:text-sky-400'>
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
