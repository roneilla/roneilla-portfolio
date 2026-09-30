'use client';
import WorkCard from '@/components/WorkCard';
import React, { useEffect, useState } from 'react';

import projectData from './data';
import PageTransition from '@/components/PageTransition';
import { useTrail, animated, easings } from 'react-spring';
import MouseCursor from '@/components/MouseCursor';
import NonClickableCard from '@/components/NonClickableCard';

const Home = () => {
	const [hover, setHover] = useState(false);

	const [cardProps, api] = useTrail(
		4, // number of cards to animate
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
		<PageTransition className="relative">
			<div className="section">
				<div className="pt-16 pb-24">
					<h1 className="text-2xl">
						<span className="font-semibold">Roneilla Bumanlag</span> is a UX designer, systems thinker, and front-end developer, drawn to visual craft and the details that make products feel polished. <span className="text-gray-600">Currently @ Wagepoint</span>
					</h1>
				</div>
				{/* <h2 className="text-lg mt-16 mb-6 font-medium ">
					Work • 2022-2026
				</h2> */}
				<div>
					<div className="mt-2 flex flex-col gap-16 mb-10">
						{projectData
							.filter((item: any) => item.category === 'selectedWork')
							.map((item: any, index: number) => <animated.div style={cardProps[index]} key={item.id}>
								<WorkCard
									setHover={setHover}
									hover={hover}
									id={item.id}
									key={item.id}
									title={item.title}
									link={item.link}
									imgSrc={item.image}
									description={item.description}
									impact={item.impact}
									preview={item.preview}
								// size="w-full md:w-1/2"
								/>
							</animated.div>
							)}
					</div>
				</div>
				{/* <MouseCursor hover={hover} /> */}
			</div>
		</PageTransition>
	);
};

export default Home;
