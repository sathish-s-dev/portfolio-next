import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { Heading } from './ui/heading';
import { ChevronRightIcon } from 'lucide-react';

export function ProjectCard({
	project: { codeUrl, image, liveUrl, name },
}: {
	project: Project;
}) {
	return (
		<div className='group hover:curosor-pointer overflow-clip  relative rounded-lg border border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 transition-all duration-300'>
			<div className='relative'>
				<Image
					src={image}
					alt='Vercel Logo'
					width={500}
					height={200}
					className='object-cover h-72 w-full grout-hover:scale-105 transition-all duration-300'
				/>
				<div className='group-hover:cursor-pointer group-hover:grid hidden backdrop-blur-sm absolute inset-0 w-full h-full bg-black/10 dark:bg-black/40 place-content-center transition-all duration-300'>
					<Button
						variant='link'
						className='w-full'>
						<Link
							className='text-white'
							href={liveUrl}
							target='_blank'>
							View Project
						</Link>
					</Button>
					<Button
						variant='link'
						className='w-full'>
						<Link
							href={codeUrl}
							className='text-white'
							target='_blank'>
							View Code
						</Link>
					</Button>
				</div>
			</div>
			<div className=' py-4 flex justify-between items-center'>
				<div>
					<Heading
						elementType='h4'
						className='text-md py-2 uppercase tracking-wider'>
						{name}
					</Heading>
					<p className='text-xs uppercase tracking-wider flex gap-4'>
						<span>HTML</span>
						<span>CSS</span>
						<span>Java Script</span>
					</p>
				</div>
				<ChevronRightIcon className='-translate-x-5 group-hover:-translate-x-2 transition-all duration-300' />
			</div>
		</div>
	);
}
