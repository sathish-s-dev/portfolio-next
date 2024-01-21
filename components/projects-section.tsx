import { ProjectCard } from './project-card';
import { Heading } from './ui/heading';
import Div from './motion/motion-parent';
import { variants } from './motion/variants';

export function ProjectSection() {
	const projectsData: Project[] = [
		{
			name: 'Watch Movie App',
			codeUrl: 'https://github.com/sathish-s-dev/watch',
			liveUrl: 'https://watch-rouge.vercel.app/',
			image: '/watch.png',
		},
		{
			name: 'Interno',
			codeUrl: 'https://github.com/sathish-s-dev/interno',
			liveUrl: 'https://interno-rouge.vercel.app/',
			image: '/interno.png',
		},
		{
			name: 'Car Show',
			codeUrl: 'https://github.com/sathish-s-dev/car-show',
			liveUrl: 'https://github.com/sathish-s-dev/interno',
			image: '/interno.png',
		},
		{
			name: 'Astra View',
			codeUrl: 'https://github.com/sathish-s-dev/astra-view',
			liveUrl: 'https://astra-view.vercel.app/',
			image: '/astra-view.png',
		},
		{
			name: 'Interno',
			codeUrl: 'https://github.com/sathish-s-dev/interno',
			liveUrl: 'https://github.com/sathish-s-dev/interno',
			image: '/interno.png',
		},
	];
	return (
		<section>
			<Heading
				variant={'default'}
				elementType={'h4'}>
				Projects
			</Heading>
			<Div
				variants={variants}
				initial='initial'
				whileInView={'whileInView'}
				className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
				{projectsData.map((project, i) => (
					<ProjectCard
						project={project}
						key={project.codeUrl + i}
					/>
				))}
			</Div>
		</section>
	);
}
