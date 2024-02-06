'use client';

import * as React from 'react';
import { MoonIcon, SunIcon, CommitIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Settings } from 'lucide-react';

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					className='focus-visible:ring-0 focus-within:ring-0 mx-0 group'
					variant='link'
					size='icon'>
					<SunIcon className=' h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 focus-visible:ring-0' />
					<MoonIcon className=' absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 focus-visible:ring-0' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem
					className='gap-2'
					onClick={() => setTheme('light')}>
					<SunIcon />
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					className='gap-2'
					onClick={() => setTheme('dark')}>
					<MoonIcon />
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					className='gap-2'
					onClick={() => setTheme('system')}>
					<Settings className='w-4 h-4' />
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
