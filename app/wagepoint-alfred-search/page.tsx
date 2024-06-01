import PageTransition from '@/components/PageTransition';
import Video from '@/components/Video';
import React from 'react';
import Lightbox from '@/components/Lightbox';

import ProjectHeader from '@/components/ProjectHeader';
import ProjectFooter from '@/components/ProjectFooter';
import CreditSection from '@/components/CreditSection';

import Header from '@/app/assets/alfred-search/header.png';
import GlobalF from '@/app/assets/alfred-search/global-featurette.png';
import TooltipF from '@/app/assets/alfred-search/tooltip-featurette.png';
import ElTransition from '@/components/ElTransition';

const AlfredSearch = () => {
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
							<h2 className="h2 displayFont mb-4">Making the search global</h2>
						</ElTransition>
						<ElTransition>
							<p>
								We’ve added a new search button in the global navigation bar.
								This allows all Alfred users to access the search function from
								anywhere.
							</p>
						</ElTransition>
					</div>

					<div className="mt-8">
						<Lightbox imgSrc={GlobalF} header={true} />
					</div>
				</div>

				<div className="mt-12">
					<div className="sm:w-1/2">
						<ElTransition>
							<h2 className="h2 displayFont mb-4">More context, less clicks</h2>
						</ElTransition>
						<ElTransition>
							<p>
								We’ve provided new icons and tooltips to help agents determine
								account types instantly - allowing them to triage requests
								faster.
							</p>
						</ElTransition>
					</div>

					<div className="mt-8">
						<Lightbox imgSrc={TooltipF} header={true} />
					</div>
				</div>
				<CreditSection
					firstCol={{
						title: 'Team',
						body: (
							<>
								UX designer: Stephanie Tsang
								<br /> UX designer & developer: Roneilla Bumanlag
							</>
						),
					}}
					secondCol={{
						title: 'Year',
						body: '2024',
					}}
				/>
			</div>
			<ProjectFooter />
		</PageTransition>
	);
};

export default AlfredSearch;
