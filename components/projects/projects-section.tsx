import { projects } from '@/constants';
import { Heading } from '../ui/heading';
import ProjectList from './project-list';

export default function ProjectSection() {
	return (
		<section
			id='projects'
			className='md:py-12 scroll-mt-[75px] w-full self-start'>
			<Heading
				variant={'default'}
				elementType={'h4'}
				className='px-0'>
				Projects
			</Heading>
			<ProjectList projects={projects} />
		</section>
	);
}
