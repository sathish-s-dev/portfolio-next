import React from 'react';
import GetInTouch from './GetInTouch';
import { Heading } from './ui/heading';
import { SocialLinks } from './social-links';

export const ContactSection = () => {
	return (
		<section className='py-10 lg:py-20 w-full grid grid-cols-1 md:grid-cols-2'>
			<aside>
				<Heading>Contact Me</Heading>
				<p className='text-sm max-w-sm'>
					I would love to hear about your project and how I could help. Please
					fill in the form, and I’ll get back to you as soon as possible.
				</p>
				<div className='flex gap-6 my-4'>
					<SocialLinks />
				</div>
			</aside>
			<aside className='max-w-md'>
				<GetInTouch />
			</aside>
		</section>
	);
};
