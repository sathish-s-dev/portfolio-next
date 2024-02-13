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
import { useMenuContext } from '@/lib/menu-context';
import { Tlink, links } from '@/constants';
import { NavItems } from './nav-items';

export const navBarVariants = {
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
			variants={navBarVariants}
			initial='initial'
			animate='animate'
			className='group md:flex hidden h-screen z-[2]  fixed justify-center items-center hover:cursor-pointer'>
			<div className='absolute nav_mask h-full w-48 left-0 py-24 dark:bg-slate-900 bg-slate-100 -translate-x-32 group-hover:-translate-x-12 transition-all duration-500 rounded-r-3xl' />
			<NavItems />
		</motion.aside>
	);
};

export default NavBar;
