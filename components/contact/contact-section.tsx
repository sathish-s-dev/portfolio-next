'use client';
import React from 'react';
import GetInTouch from './GetInTouch';
import { Heading } from '../ui/heading';
import { SocialLinks } from '../social-links';
import Circles from '../circles';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download } from 'lucide-react';

const ContactSection = () => {
	return (
		<section
			id='contact'
			className='relative py-10 gap-6 lg:py-20 w-full'>
			<Circles className='absolute -left-24 bottom-0' />
			<div className='flex justify-between items-center'>
				<Heading className='justify-start'>Contact Me</Heading>
			</div>
			<div className=' grid grid-cols-1 md:grid-cols-2 place-items-center'>
				<aside className='py-6 max-w-sm items-start gap-6 w-fit order-2 md:order-1'>
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
						className='max-w-[60%] w-full'
					/>
				</aside>
				<aside className='max-w-md self-center order-1 md:order-2'>
					<GetInTouch />
					<span className='text-xs text-slate-400 pt-4 block max-w-xs'>
						* Please write any query in the message box above will be stored in
						the <strong>Firestore</strong>.
					</span>
				</aside>
			</div>
		</section>
	);
};

export default ContactSection;
