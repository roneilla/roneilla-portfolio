'use client';
import WorkCard from '@/components/WorkCard';
import React, { useEffect, useState } from 'react';

import projectData from './data';
import PageTransition from '@/components/PageTransition';
import LineSplitAnim from '@/components/LineSplitAnim';
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

	useEffect(() => {
		console.log(hover);
	}, [hover]);

	return (
		<PageTransition>
			<div className="px-8 mt-8 md:flex gap-8">
				<p className="hidden md:block md:w-2/5 text-3xl font-medium ">
					Roneilla Bumanlag<br></br>
					<span className="font-normal">UX Designer and Developer</span>
				</p>
				<p className="md:w-4/6 text-lg">
					Hi, I’m Roneilla – a UX Designer and Developer with over 4 years of
					experience designing and building for the digital and physical space.
					<br></br>
					<br></br>
					For the past two years I’ve been at Wagepoint, leading the design
					polish efforts to elevate and standardize the front-end. I also
					spearhead the web accessibility initiative, improve the mobile
					experience, and maintain the design system.
					<br></br>
					<br></br>I’m a problem-solver, builder, and a lifelong learner. After
					hours, I’m sewing, practicing my softball swings, or building{' '}
					<a
						href="https://queerclubdirectory.com/"
						className="font-medium underline"
						target="_blank">
						Queer Club Directory.
					</a>
				</p>
			</div>
			<div className="section pb-0 mt-8">
				<p>Selected works</p>
				<p>2020 - 2024</p>
			</div>
			<animated.div style={cardProps} className="relative">
				<div className="px-1 mt-2 flex flex-wrap mb-8">
					{projectData.map((item: any, index: number) => (
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
