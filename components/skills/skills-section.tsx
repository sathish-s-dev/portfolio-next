import { skillData } from '@/constants';
import { Heading } from '../ui/heading';
import SkillsList from './skills-list';

const SkillSection = async () => {
	return (
		<section
			id='skills'
			className='w-full py-6 md:py-24 my-10'>
			<Heading>Skills</Heading>
			<SkillsList skills={skillData} />
		</section>
	);
};

export default SkillSection;
