import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const Circles = ({ className }: { className: string }) => {
	return (
		<Image
			src={'/circles.svg'}
			alt={'sathish'}
			width={200}
			height={100}
			className={cn('light:invert absolute', className)}
		/>
	);
};

export default Circles;
