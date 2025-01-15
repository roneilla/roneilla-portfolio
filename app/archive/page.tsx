import React from 'react';

import projectData from '../data';
import WorkCard from '@/components/WorkCard';

const Archive = () => {
	return (
		<div className="pt-12">
			<div className="section">
				<p className="text-4xl font-medium">Archived projects</p>
				<p>2020 - 2023</p>
			</div>
			<div className="relative">
				<div className="p-4 mt-2 flex flex-wrap mb-8">
					{projectData
						.filter((item: any) => item.category === 'archive')
						.map((item: any, index: number) => (
							<div className="p-4 w-full md:w-1/2" key={item.id}>
								<WorkCard
									ind={index}
									id={item.id}
									title={item.title}
									link={item.link}
									imgSrc={item.image}
									description={item.description}
								/>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Archive;
