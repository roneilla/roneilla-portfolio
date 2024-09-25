'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import PageOutTransition from './PageOutTransition';

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
	return (
		<>
			<div className={size}>
				<div id={`tb-${id}`} className="w-full p-6 cursor-pointer">
					<PageOutTransition link={link}>
						<div
							className="overflow-hidden rounded"
							onMouseEnter={() => setHover(true)}
							onMouseLeave={() => setHover(false)}>
							<Image
								src={imgSrc}
								alt=""
								className={`bg-gray-200 md:h-72 lg:h-96 workCardImg dark:bg-black transition-transform hover:scale-110`}
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
