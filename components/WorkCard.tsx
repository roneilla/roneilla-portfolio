'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import PageOutTransition from './PageOutTransition';
import { useSpring, animated } from '@react-spring/web';

const WorkCard = ({ id, title, description, imgSrc, link, ind, size }: any) => {
	const target = useRef(null);

	const [hover, setHover] = useState(false);

	const [{ x, y, opacity }, api] = useSpring(() => ({
		x: 0,
		y: 0,
		opacity: 0,
		config: { tension: 250, friction: 35 },
	}));

	const updateMousePosition = (e: any) => {
		const px = e.clientX;
		const py = e.clientY;

		const newX = px;
		const newY = py;

		api({
			x: newX,
			y: newY,
			opacity: 1,
		});

		console.log(
			`mouse X:${px}
			mouse Y:${py}
			btn X: ${newX}
			btn Y: ${newY}`
		);
	};

	return (
		<>
			<div className={size}>
				<div id={`tb-${id}`} className="w-full p-6 cursor-pointer relative">
					<PageOutTransition link={link}>
						<div className="overflow-hidden rounded relative">
							<Image
								ref={target}
								onMouseEnter={() => setHover(true)}
								onMouseLeave={() => {
									setHover(false);
								}}
								onMouseMove={updateMousePosition}
								src={imgSrc}
								alt=""
								className={`bg-gray-200 md:h-72 lg:h-96 workCardImg dark:bg-black transition-transform  ${
									hover ? 'scale-100' : 'scale-110'
								}`}
							/>
						</div>
						<p className="mt-4">{title}</p>
						<p className="text-gray-600 dark:text-gray-300">{description}</p>

						<animated.div
							className={`viewCaseBtn p-2 ${hover ? 'inline-block' : 'hidden'}`}
							style={{
								x,
								y,
								opacity,
							}}>
							View case study
						</animated.div>
					</PageOutTransition>
				</div>
			</div>
		</>
	);
};

export default WorkCard;
