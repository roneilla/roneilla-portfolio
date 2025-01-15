import PageTransition from '@/components/PageTransition';
import React from 'react';
import Video from '@/components/Video';
import Lightbox from '@/components/Lightbox';

import Header from '@/app/assets/peanuts/header.png';
import Wide from '@/app/assets/peanuts/wide.png';
import CloseUp from '@/app/assets/peanuts/close.png';

import ProjectHeader from '@/components/ProjectHeader';
import ProjectFooter from '@/components/ProjectFooter';
import ElTransition from '@/components/ElTransition';
import CreditSection from '@/components/CreditSection';
import { projectData } from '../data';

const Peanuts = () => {
	return (
		<PageTransition>
			<div className="section">
				<ProjectHeader />

				<div className="mt-8">
					<Lightbox imgSrc={Header} header={true} />
				</div>

				<div className="mt-12">
					<Video src={'https://www.youtube.com/watch?v=LMhIu9lH2Xs'} />
				</div>

				<div className="flex gap-8 mt-8 flex-col sm:flex-row">
					<div className="flex-1">
						<Lightbox imgSrc={Wide} />
					</div>
					<div className="flex-1">
						<Lightbox imgSrc={CloseUp} />
					</div>
				</div>

				<CreditSection
					firstCol={{
						title: 'Team',
						body: (
							<>
								Design lead: Nick Alexander
								<br /> Interaction designer & developer: Roneilla Bumanlag
								<br /> 3D artist and animator: Aaron Ong
								<br /> Product manager: Edward Chow
							</>
						),
					}}
					secondCol={{
						title: 'Client',
						body: 'Kilburn Live',
					}}
					thirdCol={{
						title: 'Year',
						body: '2022',
					}}
				/>
			</div>
			<ProjectFooter />
		</PageTransition>
	);
};

export default Peanuts;
