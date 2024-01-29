import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Heading } from '../ui/heading';
import { ChevronRightIcon } from 'lucide-react';
import { variants } from '../motion/variants';
import MotionChild from '../motion/motion-child';

export function ProjectCard({
	project: { codeUrl, image, liveUrl, name },
}: {
	project: Project;
}) {
	return (
		<MotionChild variants={variants}>
			<div className='group hover:curosor-pointer max-w-[300px] shadow-md hover:shadow-lg overflow-clip  relative rounded-lg border border-transparent hover:border-slate-300 hover:dark:border-slate-700 hover:dark:bg-slate-800/30 transition-all duration-300'>
				<div className='relative'>
					<Image
						src={image}
						alt='Vercel Logo'
						width={500}
						height={200}
						className='object-cover aspect-video w-full grout-hover:scale-105 transition-all duration-300'
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
				<div className=' p-4 pt-1 flex justify-between items-center'>
					<div>
						<Heading
							elementType='h4'
							className='text-sm md:text-md py-2 uppercase tracking-wider'>
							{name}
						</Heading>
						<p className='text-xs uppercase tracking-wider flex gap-4'>
							<span>HTML</span>
							<span>CSS</span>
							<span>Java Script</span>
						</p>
					</div>
					<ChevronRightIcon className='-trangray-x-5 group-hover:translate-x-2 transition-all duration-300' />
				</div>
			</div>
		</MotionChild>
	);
}
