import React from 'react';
import MotionParent from '../motion/motion-parent';
import { variants } from '../motion/variants';
import { SkillCard } from './skill-card';

const SkillsList = ({ skills }: { skills: Skill[] }) => {
	return (
		<MotionParent
			variants={variants}
			initial='initial'
			whileInView={'whileInView'}
			className='grid grid-cols-2 sm:grid-cols-3 place-items-center md:grid-cols-4 lg:grid-cols-6 md:gap-0 gap-6 hover:cursor-pointer'>
			{skills.map((skill) => (
				<SkillCard
					key={skill.image}
					skill={skill}
				/>
			))}
		</MotionParent>
	);
};

export default SkillsList;
