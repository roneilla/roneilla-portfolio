'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useSpring, animated, useInView, easings } from 'react-spring';
import PageOutTransition from './PageOutTransition';
import ElTransition from './ElTransition';

const WorkCard = ({ id, title, description, imgSrc, link, ind, size }: any) => {
	const [hover, setHover] = useState(false);

	return (
		<>
			<div className={size}>
				<div
					id={`tb-${id}`}
					className="w-full p-6 cursor-pointer relative"
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}>
					<PageOutTransition link={link}>
						<div className="overflow-hidden rounded">
							<Image
								src={imgSrc}
								alt=""
								className={`bg-gray-200 md:h-72 lg:h-96 workCardImg dark:bg-black transition-transform  ${
									hover ? 'scale-100' : 'scale-110'
								}`}
							/>
						</div>
						<p className="mt-4">{title}</p>
						<p className="text-gray-600 dark:text-gray-300">{description}</p>
					</PageOutTransition>
				</div>
			</div>
		</>
	);
};

export default WorkCard;
