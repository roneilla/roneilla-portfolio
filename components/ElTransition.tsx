'use client';

import React from 'react';
import { useInView, animated } from 'react-spring';

interface ElTranProps {
	children: any;
	delay?: number;
}

const ElTransition = ({ children, delay = 500 }: ElTranProps) => {
	const [ref, springs] = useInView(
		() => ({
			from: {
				opacity: 0,
				transform: 'translate(0px, 16px)',
			},
			to: {
				opacity: 1,
				transform: 'translate(0px, 0px)',
			},
			delay: delay,
			config: {
				duration: 500,
			},
		}),
		{ once: true }
	);

	return (
		<animated.div ref={ref} style={springs} className="h-full">
			{children}
		</animated.div>
	);
};

export default ElTransition;
