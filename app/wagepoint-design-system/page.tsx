import PageTransition from '@/components/PageTransition';
import Video from '@/components/Video';
import React from 'react';
import Lightbox from '@/components/Lightbox';

import ProjectHeader from '@/components/ProjectHeader';
import ProjectFooter from '@/components/ProjectFooter';
import CreditSection from '@/components/CreditSection';

import Header from '@/app/assets/wp-ds/header.png';
import TableF from '@/app/assets/wp-ds/table-featurette.png';
import HelpCentreF from '@/app/assets/wp-ds/helpcentre-featurette.png';
import ElTransition from '@/components/ElTransition';

const Wpds = () => {
	return (
		<PageTransition>
			<div className="section">
				<ProjectHeader />
				<div className="mt-8">
					<Lightbox imgSrc={Header} header={true} />
				</div>

				<div className="mt-12">
					<div className="sm:w-1/2">
						<ElTransition>
							<h2 className="h2 displayFont mb-4">A faster, flexible table</h2>
						</ElTransition>
						<ElTransition>
							<p>
								I worked closely with the design and front-end development team
								to build a new table component that is more performant, easier
								to maintain, and easy to scale for mobile views.
							</p>
						</ElTransition>
					</div>

					<div className="mt-8">
						<Lightbox imgSrc={TableF} header={true} />
					</div>
				</div>

				<div className="mt-12">
					<div className="sm:w-1/2">
						<ElTransition>
							<h2 className="h2 displayFont mb-4">
								Globally accessible help centre
							</h2>
						</ElTransition>
						<ElTransition>
							<p>
								We create a new help centre accessible in the global navigation
								bar. It displays all options for product support, no matter
								where they are in the app.
							</p>
						</ElTransition>
					</div>

					<div className="mt-8">
						<Lightbox imgSrc={HelpCentreF} header={true} />
					</div>
				</div>
				<CreditSection
					firstCol={{
						title: 'About',
						body: `This is an individual side project.`,
					}}
					secondCol={{
						title: 'Year',
						body: '2024',
					}}
					link="https://wagepoint.com/"
				/>
			</div>
			<ProjectFooter />
		</PageTransition>
	);
};

export default Wpds;
