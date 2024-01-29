import React from 'react';
import GetInTouch from './GetInTouch';
import { Heading } from '../ui/heading';
import { SocialLinks } from '../social-links';
import Circles from '../circles';
import Image from 'next/image';

const ContactSection = () => {
	return (
		<section
			id='contact'
			className='relative py-10 gap-6 lg:py-20 w-full grid grid-cols-1 md:grid-cols-2'>
			<Circles className='absolute -left-24 bottom-0' />
			<aside className='p-6'>
				<Heading>Contact Me</Heading>
				<p className='text-sm max-w-sm'>
					I would love to hear about your project and how I could help. Please
					fill in the form, and I’ll get back to you as soon as possible.
				</p>
				<div className='flex gap-6 my-4'>
					<SocialLinks />
				</div>
				<Image
					src={'/svg/contact.svg'}
					alt={'sathish'}
					width={500}
					height={500}
					className='max-w-xs'
				/>
			</aside>
			<aside className='max-w-md self-center'>
				<GetInTouch />
			</aside>
		</section>
	);
};

export default ContactSection;
