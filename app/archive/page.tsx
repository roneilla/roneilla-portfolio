'use client';

import React, { useEffect, useState } from 'react';
import projectData from '../data';
import WorkCard from '@/components/WorkCard';
import PageTransition from '@/components/PageTransition';
import { useTrail, animated, easings } from 'react-spring';


const Archive = () => {
	const [hover, setHover] = useState(false);

	const [cardTrails, api] = useTrail(
		5, // number of cards to animate
		() => ({
			from: { opacity: 0, transform: 'translateY(20px)' },
			to: { opacity: 1, transform: 'translateY(0px)' },
			delay: 500,
			config: {
				duration: 500,
				easing: easings.easeInOutQuint,
				tension: 250,
				friction: 35,
			},
		}),
		[]
	);

	useEffect(() => { }, [hover]);

	return (
		<PageTransition>
			<div className="section">
				<div className="pt-16 pb-4">
					<h1 className="text-2xl font-medium">Archived projects • 2020 - 2023</h1>
					<p className="mb-16 mt-1 text-gray-600">Some of my older projects from work, internships, and school.</p>

				</div>
				<div className="">
					<div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-16 mb-10">
						{/* <div className="p-4 mt-2 flex flex-wrap mb-8"> */}
						{projectData
							.filter((item: any) => item.category === 'archive')
							.map((item: any, index: number) => (
								<animated.div style={cardTrails[index]} key={item.id}>
									<WorkCard
										ind={index}
										id={item.id}
										title={item.title}
										link={item.link}
										imgSrc={item.image}
										description={item.description}
									/></animated.div>
							))}
					</div>
				</div>
			</div>
		</PageTransition >
	);
};

export default Archive;
