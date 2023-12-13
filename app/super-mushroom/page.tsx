import PageTransition from '@/components/PageTransition';
import Video from '@/components/Video';
import React from 'react';
import Lightbox from '@/components/Lightbox';

import FreshiiFilter from '@/app/assets/mushroom/freshii-filter.png';
import FreshiiIg from '@/app/assets/mushroom/freshii-ig.jpg';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectFooter from '@/components/ProjectFooter';
import CreditSection from '@/components/CreditSection';

const Mush = () => {
	return (
		<PageTransition>
			<div className="section">
				<ProjectHeader />
				<div className="rounded mt-8">
					<Video src={'https://www.youtube.com/watch?v=GjFVKu3kSM4'} />
				</div>
				<div className="flex gap-4 mt-12 flex-col sm:flex-row">
					<Lightbox
						background="freshii-green"
						imgSrc={FreshiiFilter}
						className="phoneImg"
					/>

					<Lightbox
						background="freshii-green"
						imgSrc={FreshiiIg}
						className="phoneImg"
					/>
				</div>
				<CreditSection
					firstCol={{
						title: 'Team',
						body: (
							<>
								Design lead: Nick Alexander
								<br /> Interactive developer: Roneilla Bumanlag
								<br /> 3D artist and rigger: Aaron Ong
							</>
						),
					}}
					secondCol={{
						title: 'Client',
						body: 'Freshii',
					}}
					thirdCol={{
						title: 'Year',
						body: '2021',
					}}
				/>
			</div>
			<ProjectFooter />
		</PageTransition>
	);
};

export default Mush;
