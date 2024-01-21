import React from 'react';
import { Heading } from './ui/heading';
import Image from 'next/image';
import MotionParent from './motion/motion-parent';
import { variants } from './motion/variants';
import MotionChild from './motion/motion-child';

const SkillSection = async () => {
	const skillData = [
		{
			name: 'HTML 5',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
		},
		{
			name: 'CSS 3',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
		},
		{
			name: 'React.js',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
		},
		{
			name: 'Next.js',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
		},
		{
			name: 'Typescript',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
		},
		{
			name: 'Tailwind css',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
		},
		{
			name: 'Node.js',
			image:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
		},
		{
			name: 'Cypress',
			image:
				'https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/cypress.svg',
		},
	];
	return (
		<section className='w-full py-6 md:pb-24'>
			<Heading>Skills</Heading>
			<MotionParent
				variants={variants}
				initial='initial'
				whileInView={'whileInView'}
				className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 hover:cursor-pointer'>
				{skillData.map((skill) => (
					<SkillCard
						key={skill.image}
						{...skill}
					/>
				))}
			</MotionParent>
		</section>
	);
};

export default SkillSection;

function SkillCard({ name, image }: { name: string; image: string }) {
	return (
		<MotionChild
			variants={variants}
			className='p-6 py-10 rounded-lg grid place-items-center gap-2 bg-slate-50/10 hover:scale-105 transition-all'>
			<Image
				src={image}
				alt={name}
				width={50}
				height={50}
			/>
			<figcaption className='text-xs dark:text-slate-100 text-slate-700'>
				{name}
			</figcaption>
		</MotionChild>
	);
}
