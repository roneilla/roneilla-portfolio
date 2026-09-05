'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import PageOutTransition from './PageOutTransition';
import { useSpring, animated } from 'react-spring';


const WorkCard = ({
	id,
	title,
	description,
	imgSrc,
	link,
	ind,
	size,
	setHover,
}: any) => {
	const [hovering, setHovering] = useState(false);

	useEffect(() => { console.log(hovering) }, [hovering]);

	const properties = {
		start: {
			opacity: '1',
			marginLeft: '0px',
			scale: 0.95,
		},
		end: {
			opacity: '0',
			marginLeft: '-4px',
			scale: 1,
		},
		springConfig: { tension: 250, friction: 35 },
	};

	const { opacity, marginLeft, scale } = properties[hovering ? 'start' : 'end'];

	const linkIcon = useSpring({
		opacity,
		marginLeft,
		config: properties.springConfig
	});

	const thumbnail = useSpring({
		scale,
		config: properties.springConfig
	})



	return (
		<>
			<div className={`w-full text-black h-full`}
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}>
				<div
					id={`tb-${id}`}
					className="h-full w-full cursor-pointer">
					<PageOutTransition link={link}>
						<animated.div
							className="overflow-hidden"
							style={thumbnail}
						// onMouseEnter={() => setHover(true)}
						// onMouseLeave={() => setHover(false)}
						>
							<Image
								src={imgSrc}
								alt="" // add alt texts

								className={`rounded-lg object-cover md:min-h-90 workCardImg dark:bg-black`}
							/>
						</animated.div>
						<div className="mt-4 mb-1 flex items-center gap-2">
							<h3 className="font-medium text-lg">
								{title}
							</h3>
							<animated.div style={linkIcon}>
								{/* Go to case study */}
								{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5">
									<path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd" />
								</svg> */}
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5">
									<path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
								</svg>

							</animated.div>
						</div>
						<p className="text-gray-600">{description}</p>
					</PageOutTransition>
				</div >
			</div >
		</>
	);
};

export default WorkCard;
