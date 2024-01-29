import Image from 'next/image';
import React from 'react';
import { Heading } from '../ui/heading';

const AboutSection = () => {
	return (
		<section
			id='about'
			className='flex-1 md:py-16 py-6 flex justify-center flex-col items-center scroll-mt-[100px]'>
			<Heading className='self-start'>About</Heading>
			<div className='relative z-24 md:p-16 flex justify-center items-center'>
				<div className='dark:block hidden absolute w-24 h-24 -z-20 rounded-full bg-blue-400 top-6 left-6' />
				{/* light */}
				<div className='dark:block hidden absolute w-48 h-48 top-3 left-3 -z-20 rounded-full bg-gradient-to-r from-blue-400/70 to-blue-400/10 blur-[140px]' />

				<div className='grid grid-cols-1 md:grid-cols-2 md:flex-row bg-light-400/5 border border-light-400/50 rounded-xl flex-1 max-w-[90%] gap-6 md:max-w-3xl p-6 py-12 lg:p-20 sm:p-10 backdrop-blur-xl md:gap-8 text-light-400 z-24'>
					<div className='overflow-hidden order-2 md:order-1 flex justify-center'>
						<Image
							className=''
							src={'/hero_bg.png'}
							width={200}
							height={150}
							alt='hero image'
							priority
						/>
					</div>
					<div className='flex-1 flex order-1 md:order-2 gap-5 items-center md:items-start justify-center flex-col'>
						<Heading className='tracking-wide md:tracking-widest py-0 text-primary self-start'>
							Who Am I ?
						</Heading>
						<p className='tracking-wide md:tracking-wide text-xs first-letter:text-xl sm:text-sm text-secondary-foreground'>
							Hello! I&#39;m{' '}
							<span className='uppercase font-bold'>Sathish</span> a passionate
							React developer with a strong drive to create seamless and
							user-centric web experiences. Welcome to my portfolio, where I
							showcase my projects, skills, and journey in the world of web
							development.
						</p>
					</div>
				</div>
				{/* <div className='dark:block hidden absolute w-24 h-24 -z-20 rounded-full bg-accent-300 bottom-2 right-2 blur-sm' /> */}
				<div className='dark:block hidden absolute w-24 h-24 -z-20 rounded-full bg-red-800 bottom-6 right-6' />
				{/*  */}
				<div className='dark:block hidden absolute w-48 h-48 bottom-3 right-3 -z-20 rounded-full bg-gradient-to-l from-red-800 to-red-900 blur-[140px]' />
			</div>
		</section>
	);
};

export default AboutSection;
