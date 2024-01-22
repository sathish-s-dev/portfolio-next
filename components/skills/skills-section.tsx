import { skillData } from '@/constants';
import { Heading } from '../ui/heading';
import SkillsList from './skills-list';

const SkillSection = async () => {
	return (
		<section className='w-full py-6 md:pb-24'>
			<Heading>Skills</Heading>
			<SkillsList skills={skillData} />
		</section>
	);
};

export default SkillSection;
