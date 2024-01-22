import React from 'react';
import { variants } from '../motion/variants';
import { ProjectCard } from './project-card';
import MotionParent from '../motion/motion-parent';

const ProjectList = ({ projects }: { projects: Project[] }) => {
	return (
		<MotionParent
			variants={variants}
			initial='initial'
			whileInView={'whileInView'}
			className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
			{projects.map((project, i) => (
				<ProjectCard
					project={project}
					key={project.codeUrl + i}
				/>
			))}
		</MotionParent>
	);
};

export default ProjectList;
