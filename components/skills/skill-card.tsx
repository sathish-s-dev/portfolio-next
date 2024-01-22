import Image from 'next/image';
import MotionChild from '../motion/motion-child';
import { variants } from '../motion/variants';

export function SkillCard({ skill: { name, image } }: { skill: Skill }) {
	return (
		<MotionChild variants={variants}>
			<figure className='p-6 py-10 rounded-lg  bg-slate-50/10 bg-gradient-to-r dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 hover:scale-110 transition-all grid place-items-center gap-2'>
				<Image
					src={image}
					alt={name}
					width={60}
					height={60}
					className='fill-white'
				/>
				<figcaption className='text-xs dark:text-slate-100 text-slate-700'>
					{name}
				</figcaption>
			</figure>
		</MotionChild>
	);
}
