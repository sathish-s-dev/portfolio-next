'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
	Timeline as TimeLine,
	TimelineItem,
	TimelineConnector,
	TimelineHeader,
	TimelineIcon,
	TimelineBody,
	Typography,
} from '@material-tailwind/react';
import { Briefcase } from 'lucide-react';
import { variants } from '../motion/variants';

// const variants = {
// 	initial: {
// 		opacity: 0,
// 		x: 50,
// 	},
// 	whileInView: {
// 		opacity: 1,
// 		x: 0,
// 		transition: {
// 			staggerChildren: 0.2,
// 			duration: 1,
// 			when: 'beforeChildren',
// 		},
// 	},
// };
const Timeline = () => {
	const timelineData = [
		{
			id: 1,
			title: 'React Native Developer',
			company: 'Vistara Informatics',
			date: 'Apr 2023 - Present',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		},
		{
			id: 2,
			title: 'React Developer',
			company: 'Vistara Informatics',
			date: 'Oct 2021 - Apr 2023',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		},
	];

	const MotionTypography = motion(Typography);
	return (
		<TimeLine className='flex gap-16'>
			{timelineData.map((item) => (
				<TimelineItem key={item.id}>
					<TimelineConnector />
					<TimelineHeader className='h-3 justify-between'>
						<TimelineIcon className='p-2'>
							<Briefcase size={16} />
						</TimelineIcon>
						<MotionTypography
							variants={variants}
							whileInView='whileInView'
							initial='initial'
							placeholder={''}
							variant='h6'
							color='blue-gray'
							className='leading-none flex-1'>
							{item.title}
						</MotionTypography>
						<MotionTypography
							variants={variants}
							whileInView='whileInView'
							initial='initial'
							placeholder={''}
							className='font-normal text-gray-600'>
							{item.date}
						</MotionTypography>
					</TimelineHeader>
					<TimelineBody className='pb-8'>
						<MotionTypography
							variants={variants}
							whileInView='whileInView'
							initial='initial'
							placeholder={''}
							variant='paragraph'
							className='md:text-sm text-xs block text-gray-500'>
							{item.company}
						</MotionTypography>
						<MotionTypography
							variants={variants}
							whileInView='whileInView'
							initial='initial'
							placeholder={''}
							className='font-normal text-gray-600 text-sm'>
							{item.description}
						</MotionTypography>
					</TimelineBody>
				</TimelineItem>
			))}
		</TimeLine>
	);
};

export default Timeline;
