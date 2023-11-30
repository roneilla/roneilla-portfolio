import WorkCard from '@/components/WorkCard';
import React from 'react';

import projectData from './data';
import PageTransition from '@/components/PageTransition';

const Home = () => {
	return (
		<PageTransition>
			<div className="section">
				<div className="mt-8 sm:w-2/3">
					<h1 className="h1 displayFont">
						Roneilla <br />
						Bumanlag
					</h1>
				</div>

				<div className="mt-8 sm:w-1/2 md:w-1/3 ml-auto">
					<p className="text-xl">
						{/* TODO: change this */}
						Interaction designer and creative developer.{` `}
						<span className="text-gray-500 dark:text-gray-300">
							Currently a UX Developer at Wagepoint
						</span>
					</p>
				</div>
			</div>
			<div className="px-4 md:px-8 mt-12 flex flex-wrap mb-8">
				{projectData.map((item: any) => (
					<WorkCard
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
