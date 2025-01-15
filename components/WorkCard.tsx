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
			<div className={`w-full text-black h-full`}>
				<div
					id={`tb-${id}`}
					className="h-full w-full p-6 cursor-pointer bg-gray-100 rounded-lg">
					<PageOutTransition link={link}>
						<p className="font-medium text-2xl mb-2">{title}</p>
						<p className="text-gray-600">{description}</p>
						<div
							className="overflow-hidden  mt-6"
							onMouseEnter={() => setHover(true)}
							onMouseLeave={() => setHover(false)}>
							<Image
								src={imgSrc}
								alt="" // add alt texts
								className={`rounded-lg object-contain max-h-96 workCardImg dark:bg-black transition-transform hover:scale-90`}
							/>
						</div>
					</PageOutTransition>
				</div>
			</div>
		</>
	);
};

export default WorkCard;
