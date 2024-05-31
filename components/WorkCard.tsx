'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useSpring, animated, useInView, easings } from 'react-spring';
import PageOutTransition from './PageOutTransition';

const WorkCard = ({ id, title, description, imgSrc, link, ind, size }: any) => {
	return (
		<>
			<div className={size}>
				<div id={`tb-${id}`} className="w-full p-6 cursor-pointer relative">
					<PageOutTransition link={link}>
						<Image
							src={imgSrc}
							alt=""
							className="bg-gray-200 h-72 lg:h-96 workCardImg dark:bg-black"
						/>
						<p className="mt-4">{title}</p>
						<p className="text-gray-500 dark:text-gray-300">{description}</p>
					</PageOutTransition>
				</div>
			</div>
		</>
	);
};

export default WorkCard;
