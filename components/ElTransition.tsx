'use client';

import React from 'react';
import { useInView, animated } from 'react-spring';

const ElTransition = ({ children, delay }: any) => {
	const [ref, springs] = useInView(() => ({
		from: {
			opacity: 0,
			transform: 'translate(0px, 16px)',
		},
		to: {
			opacity: 1,
			transform: 'translate(0px, 0px)',
		},
		delay: 300,
		config: {
			duration: 500,
		},
	}));

	return (
		<animated.div ref={ref} style={springs} className="h-full">
			{children}
		</animated.div>
	);
};

export default ElTransition;
