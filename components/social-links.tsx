import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
	InstagramLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';

export function SocialLinks() {
	const links = [
		{
			name: 'GitHub',
			href: 'https://github.com/sathish-s-dev',
			Icon: GitHubLogoIcon,
		},
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/sathish-s-dev/',
			Icon: LinkedInLogoIcon,
		},
		{
			name: 'Twitter',
			href: 'https://twitter.com/sathish_s_dev',
			Icon: TwitterLogoIcon,
		},
		{
			name: 'Instagram',
			href: 'https://www.instagram.com/god__of__the__world/',
			Icon: InstagramLogoIcon,
		},
	];
	return (
		<div className='flex items-center gap-6'>
			{links.map(({ Icon, href }) => (
				<Link
					key={href}
					href={href}
					target='_blank'
					referrerPolicy='no-referrer'>
					<Icon className='w-5 h-5 hover:text-blue-500' />
				</Link>
			))}
		</div>
	);
}
