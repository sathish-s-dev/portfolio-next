import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/lib/utils';

const headingVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'text-2xl py-4 font-semibold',
				sub_heading: 'text-xl py-3',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

export interface HeadingProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof headingVariants> {
	elementType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = ({
	className,
	variant,
	elementType,
	...props
}: HeadingProps) => {
	const Comp = elementType ? elementType : 'h3';
	return (
		<Comp
			className={cn(headingVariants({ variant, className }), '')}
			{...props}
		/>
	);
};
Heading.displayName = 'h3';

export { Heading, headingVariants };
