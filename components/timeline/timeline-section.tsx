import React from 'react';
import Timeline from './timeline';
import { Heading } from '../ui/heading';

const TimeLineSection = () => {
	return (
		<section className='w-full md:p-24 py-12 grid gap-12 content-start'>
			<Heading className='justify-start'>Experiance</Heading>
			<Timeline />
		</section>
	);
};

export default TimeLineSection;
