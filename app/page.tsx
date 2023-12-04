'use client';
import WorkCard from '@/components/WorkCard';
import React from 'react';

import projectData from './data';
import PageTransition from '@/components/PageTransition';
import TextSplitAnim from '@/components/TextSplitAnim';
import LineSplitAnim from '@/components/LineSplitAnim';
import { useSpring, animated, easings } from 'react-spring';

const Home = () => {
	const [cardProps, api] = useSpring(
		() => ({
			from: { opacity: 0, transform: 'translate(0px, 16px)' },
			to: { opacity: 1, transform: 'translate(0px, 0px)' },
			delay: 1250,
			config: {
				duration: 500,
				easing: easings.easeInOutQuint,
				tension: 250,
				friction: 35,
			},
		}),
		[]
	);
	return (
		<PageTransition>
			<div className="section">
				<div className="mt-8 sm:w-2/3">
					<h1 className="h1 displayFont splitAnim">
						<TextSplitAnim initDelay={0.5} text={`Roneilla\nBumanlag`} />
					</h1>
				</div>

				<div className="mt-8 sm:w-1/2 md:w-1/3 ml-auto">
					<p className="text-xl splitAnim">
						<LineSplitAnim
							initDelay={1.25}
							text={[
								'Interaction designer and creative developer. Currently a UX Developer at Wagepoint',
							]}
							// change text to two lines
						/>
					</p>
				</div>
			</div>
			<div className="px-4 md:px-8 mt-12 flex flex-wrap mb-8">
				{projectData.map((item: any, index: number) => (
					<WorkCard
						ind={index}
						id={item.id}
						key={item.id}
						title={item.title}
						link={item.link}
						imgSrc={item.image}
						description={item.description}
					/>
				))}
			</div>
		</PageTransition>
	);
};

export default Home;
