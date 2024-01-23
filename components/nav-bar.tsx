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
import { motion } from 'framer-motion';

const NavBar = () => {
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
		<motion.aside className='group h-screen fixed flex justify-center items-center hover:cursor-pointer'>
			<div className='absolute h-[90%] w-52 left-0 dark:bg-slate-900 bg-slate-100 -translate-x-36 group-hover:translate-x-0 transition-all duration-500 rounded-r-full' />
			<nav className='group-hover:translate-x-0 relative z-20 grid content-center gap-10 transition-all duration-300 h-fit py-24 w-fit px-4 -translate-x-0 rounded-r-full'>
				{links.map(({ name, href, Icon }) => (
					<li
						key={name + href}
						className='list-none'>
						<Link
							href={href}
							className='flex items-center gap-2 hover:text-sky-500 transition-colors duration-100 dark:hover:text-sky-400'>
							<Icon />
							<p className='group-hover:scale-x-100 scale-x-0 transition-transform duration-100 origin-left delay-200'>
								{name}
							</p>
						</Link>
					</li>
				))}
			</nav>
		</motion.aside>
	);
};

export default NavBar;
