'use client';

import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

const PageOutTransition = ({ link, children, className }: any) => {
	const router = useRouter();

	const [loading, setLoading] = useState(false);
	const [mounted, setMounted] = useState(false);
	const portalRoot = mounted ? document.getElementById('page-transition-root') : null;

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleClick = (e: any) => {
		e.preventDefault();

		setLoading(true);

		setTimeout(() => {
			router.push(link);
		}, 500);

		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	const properties = {
		start: {
			top: '100vh',
			redD: 200,
			blueD: 100,
			yellowD: 0,
		},
		end: {
			top: '0',
			redD: 0,
			blueD: 100,
			yellowD: 200,
		},
		springConfig: { tension: 250, friction: 35 },
	};

	const { top, redD, blueD, yellowD, display } = properties[loading ? 'end' : 'start'];

	const red = useSpring({ top, display, delay: redD, config: properties.springConfig });
	const blue = useSpring({
		top, display,
		delay: blueD,
		config: properties.springConfig,
	});
	const yellow = useSpring({
		top,
		display,
		delay: yellowD,
		config: properties.springConfig,
	});
	// return <div onClick={handleClick}>{children}</div>;
	return (
		<>
			<div
				onClick={handleClick}
				className={`cursor-pointer ${className || ''}`}>
				{children}
			</div>
			{portalRoot && createPortal(
				<>
					<animated.div
						style={red}
						className="w-screen fixed left-0 top-full h-full r-p3 z-50"
					/>
					<animated.div
						style={blue}
						className="w-screen fixed left-0 top-full h-full r-p2 z-50"
					/>
					<animated.div
						style={yellow}
						className="w-screen fixed left-0 top-full h-full r-p1 z-50"
					/>
				</>,
				portalRoot
			)}
		</>
	);
};

export default PageOutTransition;
