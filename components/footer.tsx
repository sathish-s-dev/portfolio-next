import React from 'react';
import { SocialLinks } from './social-links';

const Footer = () => {
	return (
		<footer className=' w-full py-6 backdrop-blur-2xl '>
			<div className='flex px-4 w-full items-center justify-between max-w-5xl mx-auto'>
				<p className='dark:text-white text-xl font-bold text-black'>Sathish</p>
				<SocialLinks />
			</div>
		</footer>
	);
};

export default Footer;
