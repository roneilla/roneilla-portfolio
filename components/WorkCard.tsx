'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import PageOutTransition from './PageOutTransition';
import { useSpring, animated } from 'react-spring';

interface WorkCardInterface {
	id: string;
	title: string;
	description: string;
	imgSrc: string;
	link: string;
	size: string;
	setHover?: React.Dispatch<React.SetStateAction<boolean>>;
	impact?: string[];
	preview?: boolean;
}


const WorkCard = ({
	id,
	title,
	description,
	imgSrc,
	link,
	impact = [],
	preview = false
}: WorkCardInterface) => {
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

	const ThumbnailImg = () => {
		return (<Image
			src={imgSrc}
			alt="" // add alt texts
			className={`rounded-lg object-cover md:min-h-90 workCardImg dark:bg-black`}
		/>)
	}

	const Description = () => {
		return (
			<div>
				<p className="text-gray-600">{description}</p>
				{impact?.length > 0 ?
					<div className='text-gray-600 p-4 bg-gray-100 rounded mt-4'>
						<p className='font-medium mb-2'>Impact</p>

						<ul className='flex'>
							{impact?.map((it, i) => <li className='flex-1'>
								{it}
							</li>)}
						</ul>

					</div> : null}
			</div>)
	}

	return (
		<>
			<div className={`w-full text-black h-full`}
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}>
				<div
					id={`tb-${id}`}
					className="h-full w-full cursor-pointer">

					{preview ? <div className='cursor-default flex flex-col md:flex-row gap-4 md:gap-12'>
						<div className="md:w-1/2">
							<ThumbnailImg />
						</div>
						<div className='flex-1'>
							<div className="mt-4 mb-1 flex items-center gap-2">
								<h3 className="font-medium text-lg">
									{title}
								</h3>
								<div className="inline-block">
									<svg aria-label="Locked case study" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4">
										<title>Locked case study</title>
										<path fill-rule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clip-rule="evenodd" />
									</svg>
								</div>
							</div>
							<Description />
						</div>


					</div>
						:
						<PageOutTransition link={link} className="flex flex-col items-center md:flex-row gap-4 md:gap-12">
							<animated.div
								className="md:w-1/2"
								style={thumbnail}
							// onMouseEnter={() => setHover(true)}
							// onMouseLeave={() => setHover(false)}
							>
								<ThumbnailImg />
							</animated.div>

							<div className="flex-1">
								<h3 className="font-medium text-lg">
									{title}
								</h3>
								<Description />
								<animated.div style={linkIcon} className="mt-4">
									<p className="inline-block font-medium">Go to case study</p>
									{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5">
									<path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd" />
								</svg> */}
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 inline-block">
										<path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
									</svg>
								</animated.div>
							</div>

						</PageOutTransition>
					}


				</div >
			</div >
		</>
	);
};

export default WorkCard;
