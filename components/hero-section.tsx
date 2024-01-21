import React from 'react';
import { Heading } from './ui/heading';
import Image from 'next/image';
import { Button } from './ui/button';

const HeroSection = () => {
	return (
		<div className='w-full grid-cols-1 grid md:grid-cols-2 gap-10 md:gap-0'>
			<div className='grid gap-4 place-items-start place-content-start'>
				<Heading className='text-5xl'>
					Nice to Meet you!
					<br /> I&apos;m Sathish
				</Heading>
				<p className='text-sm max-w-sm'>
					Based in the UK, I’m a front-end developer passionate about building
					accessible web apps that users love.
				</p>
				<Button variant={'outline'}>Hire me</Button>
			</div>
			<div className='max-h-full hero-mask overflow-clip'>
				<Image
					src={'/hero.png'}
					alt='sathish photo'
					width={500}
					height={500}
					className='object-contain -mt-12 h-96 w-full grout-hover:scale-105 transition-all duration-300'
				/>
			</div>
		</div>
	);
};

export default HeroSection;
