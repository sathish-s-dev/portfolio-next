import Image from 'next/image';
import React from 'react';
import { Heading } from '../ui/heading';

const AboutSection = () => {
	return (
		<section
			id='about'
			className='flex-1 md:py-16 py-6 flex justify-center flex-col items-center scroll-mt-[100px]'>
			<Heading className='self-start'>About</Heading>
			<div className='relative z-24 md:py-16 flex justify-center items-center'>
				<div className='dark:block hidden absolute w-24 h-24 -z-20 rounded-full bg-blue-400 top-6 left-0' />
				{/* light */}
				<div className='dark:block hidden absolute w-64 h-64 -top-12 -left-12 -z-20 rounded-full bg-gradient-to-br from-blue-400/10 to-blue-400 blur-[140px]' />

				<div className='grid grid-cols-1  md:grid-cols-2 md:flex-row bg-light-400/5 border border-light-400/50 rounded-xl flex-1 max-w-[90%] gap-6 w-full p-6 py-12 lg:p-16 h-[500px] sm:p-10 backdrop-blur-xl md:gap-8 text-light-400 z-24 group transition-all duration-300'>
					<div className='rounded-xl order-2 md:order-1 flex justify-center items-center relative'>
						<Image
							className='filter transition gray-transition group-hover:grayscale-0 z-[12] scale-125 lg:scale-[1.65]'
							src={'/sathish1.svg'}
							width={250}
							height={150}
							alt='hero image'
							priority
						/>
						{/* <div className='absolute w-10 aspect-square z-20 rounded-full opacity-40 filter transition duration-300 bg-blue-500 blur-lg scale-0 group-hover:scale-[5]' /> */}
					</div>
					<div className='flex order-1 md:order-2 gap-5 items-center md:items-start justify-center flex-col'>
						<Heading className='tracking-wide md:tracking-widest py-0 text-primary self-start'>
							Who Am I ?
						</Heading>
						<p className='tracking-wide md:tracking-wide text-xs first-letter:text-lg sm:text-sm text-secondary-foreground'>
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
				<div className='dark:block hidden absolute w-24 h-24 -z-20 rounded-full bg-red-800 bottom-6 right-0' />
				{/*  */}
				<div className='dark:block hidden absolute w-64 h-64 -bottom-12  -right-12 -z-20 rounded-full bg-gradient-to-l from-red-800 to-red-900 blur-[140px]' />
			</div>
		</section>
	);
};

export default AboutSection;
