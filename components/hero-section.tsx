import React from 'react';
import { Heading } from './ui/heading';
import Image from 'next/image';
// import { Button } from './ui/button';
// import { Button } from '@material-tailwind/react';
import { Button } from './button';
import Link from 'next/link';
import Circles from './circles';

const HeroSection = () => {
	return (
		<section
			id='hero'
			className='w-full relative grid-cols-1 items-start grid md:grid-cols-2 gap-10 md:gap-0'>
			<Circles className='-left-24' />
			<div className='grid gap-4 place-items-start place-content-start'>
				<Heading className='lg:text-5xl text-4xl block'>
					Nice to Meet you!
					<span className='block pt-2 bg-gradient-to-br text-4xl from-sky-500 via-teal-300 to-sky-900 bg-clip-text text-transparent'>
						I&apos;m SATHISH
					</span>
					<span className='block pt-2 bg-gradient-to-b text-xl from-fuchsia-500 to-sky-500 bg-clip-text text-transparent'>
						Front End Developer
					</span>
				</Heading>
				<p className='md:text-sm max-w-sm text-xs'>
					Based in the UK, I’m a front-end developer passionate about building
					accessible web apps that users love.
				</p>
				<Button
					placeholder={'hire me'}
					color='teal'>
					<Link href='#contact'>Hire me</Link>
				</Button>
			</div>
			<div className='w-full h-full flex items-center md:justify-center'>
				<div className='relative z-10'>
					<Image
						src={'/svg/landing_page.png'}
						alt='sathish photo'
						width={250}
						height={250}
						className='object-contain w-full top-0 bottom-0 aspect-video'
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
