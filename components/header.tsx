import { SocialLinks } from './social-links';
import { ModeToggle } from './theme-toggle';

const Header = () => {
	return (
		<header className='sticky top-0 w-full border-b border-gray-300 bg-gradient-to-b from-slate-200 py-6 backdrop-blur-xl dark:border-neutral-800 dark:bg-slate-800/30 dark:from-inherit z-10'>
			<div className='flex px-4 w-full items-center justify-between max-w-5xl mx-auto'>
				<p className='dark:text-white text-xl font-bold text-black'>Sathish</p>
				<div className='flex items-center gap-6'>
					<ModeToggle />
					<SocialLinks />
				</div>
			</div>
		</header>
	);
};

export default Header;
