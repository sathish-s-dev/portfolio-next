'use client';
import React, { PropsWithChildren } from 'react';
import { motion, MotionProps, useInView } from 'framer-motion';

type MotionDIvProps = MotionProps & {
	className?: string;
};

const MotionParent = ({ children, ...restProps }: MotionDIvProps) => {
	return <motion.div {...restProps}>{children}</motion.div>;
};

export default MotionParent;
