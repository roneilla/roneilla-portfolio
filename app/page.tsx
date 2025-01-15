'use client';
import WorkCard from '@/components/WorkCard';
import React, { useEffect, useState } from 'react';

import projectData from './data';
import PageTransition from '@/components/PageTransition';
import { useSpring, animated, easings } from 'react-spring';
import MouseCursor from '@/components/MouseCursor';

const Home = () => {
	const [hover, setHover] = useState(false);

	const [cardProps, api] = useSpring(
		() => ({
			from: { opacity: 0, bottom: '-16px' },
			to: { opacity: 1, bottom: '0' },
			delay: 750,
			config: {
				duration: 500,
				easing: easings.easeInOutQuint,
				tension: 250,
				friction: 35,
			},
		}),
		[]
	);

	useEffect(() => {}, [hover]);

	return (
		<PageTransition>
			<div className="px-8 pt-20">
				<p className="text-4xl font-medium">
					Roneilla Bumanlag
					<br></br>– UX Designer and Developer
				</p>
			</div>
			<div className="section pb-0 mt-36 flex flex-col-reverse md:flex-row justify-between font-medium md:items-end">
				<p className="mt-2 md:mt-0">2022 - 2025</p>
				<p className="md:w-1/4">
					Specializing in design systems, front-end development, product
					strategy, and web accessibility
				</p>
			</div>
			<animated.div style={cardProps} className="relative">
				<div className="p-4 mt-2 flex flex-col gap-8 mb-8">
					{projectData
						.filter((item: any) => item.category === 'selectedWork')
						.map((item: any, index: number) => (
							<WorkCard
								setHover={setHover}
								hover={hover}
								ind={index}
								id={item.id}
								key={item.id}
								title={item.title}
								link={item.link}
								imgSrc={item.image}
								description={item.description}
								size="w-full md:w-1/2"
							/>
						))}
				</div>
			</animated.div>
			<MouseCursor hover={hover} />
		</PageTransition>
	);
};

export default Home;
