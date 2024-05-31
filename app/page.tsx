'use client';
import WorkCard from '@/components/WorkCard';
import React from 'react';

import projectData from './data';
import PageTransition from '@/components/PageTransition';
import TextSplitAnim from '@/components/TextSplitAnim';
import LineSplitAnim from '@/components/LineSplitAnim';
import { useSpring, animated, easings } from 'react-spring';

import HeaderName from '@/components/HeaderName';

const Home = () => {
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
	return (
		<PageTransition>
			<div className="px-8">
				<p className="splitAnim">
					<LineSplitAnim
						initDelay={1}
						text={[
							`I’m a UX Designer and Developer with experience in design systems,`,
							`building for scalability, and making interactions delightful.`,
						]}
					/>
				</p>

				<p className="splitAnim mt-8 text-gray-500 dark:text-gray-300">
					<LineSplitAnim
						initDelay={1.75}
						text={[
							`Currently building payroll for small businesses at Wagepoint.`,
						]}
					/>
				</p>
			</div>
			<div className="section pb-0 mt-8">
				<p className="splitAnim">
					<LineSplitAnim
						initDelay={2}
						text={[`Selected Work`, `2020 - 2024`]}
					/>
				</p>
			</div>
			<animated.div style={cardProps} className="relative">
				<div className="px-1 mt-2 flex flex-wrap mb-8">
					{projectData.map((item: any, index: number) => (
						<WorkCard
							ind={index}
							id={item.id}
							key={item.id}
							title={item.title}
							link={item.link}
							imgSrc={item.image}
							description={item.description}
							size={item.size}
						/>
					))}
				</div>
			</animated.div>
		</PageTransition>
	);
};

export default Home;
