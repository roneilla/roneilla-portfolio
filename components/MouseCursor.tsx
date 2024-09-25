'use client';

import React, { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const MouseCursor = ({ hover }: any) => {
	const [{ x, y, opacity, scale }, api] = useSpring(() => ({
		scale: 0,
		x: 0,
		y: 0,
		opacity: 0,
		config: { tension: 250, friction: 35 },
	}));

	useEffect(() => {
		const updateMousePosition = (e: any) => {
			const px = e.clientX;
			const py = e.clientY;

			const newX = px;
			const newY = py;

			api({
				x: newX,
				y: newY,
				opacity: 1,
				scale: 1,
			});
		};

		window.addEventListener('mousemove', updateMousePosition);

		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		};
	}, []);

	return (
		<animated.div
			className={`viewCaseBtn py-2 px-4  pointer-events-none no-wrap bg-white font-medium ${
				hover ? 'inline-block' : 'hidden'
			}`}
			style={{
				x,
				y,
				opacity,
				scale,
			}}>
			View case study
		</animated.div>
	);
};

export default MouseCursor;
