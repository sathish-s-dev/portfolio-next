import { ProjectCard } from './project-card';
import { Heading } from '../ui/heading';
import MotionParent from '../motion/motion-parent';
import { variants } from '../motion/variants';
import ProjectList from './project-list';
import { projects } from '@/constants';

export default function ProjectSection() {
	return (
		<section
			id='projects'
			className='py-24'>
			<Heading
				variant={'default'}
				elementType={'h4'}>
				Projects
			</Heading>
			<ProjectList projects={projects} />
		</section>
	);
}
