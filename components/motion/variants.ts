export const variants = {
	initial: { opacity: 0, y: 50 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0,
			staggerChildren: 0.1,
		},
	},
	whileInView: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.35,
			when: 'beforeChildren', // beforeChildren, afterChildren
			staggerChildren: 0.08,
		},
	},
};
