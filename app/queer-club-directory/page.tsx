import PageTransition from '@/components/PageTransition';
import Video from '@/components/Video';
import React from 'react';
import Lightbox from '@/components/Lightbox';

import ProjectHeader from '@/components/ProjectHeader';
import ProjectFooter from '@/components/ProjectFooter';
import CreditSection from '@/components/CreditSection';

import Header from '@/app/assets/queerdirectory/header.png';
import TabsF from '@/app/assets/queerdirectory/tabs-featurette.png';
import StyleGuide from '@/app/assets/queerdirectory/styleguide.png';
import ElTransition from '@/components/ElTransition';

const Qcdt = () => {
	return (
		<PageTransition>
			<div className="section">
				<ProjectHeader />

				<div className="mt-8">
					<Lightbox imgSrc={TabsF} header={true} />
				</div>

				<div className="mt-12">
					<div className="sm:w-1/2">
						<ElTransition>
							<h2 className="h2 displayFont mb-4">Opportunity</h2>
						</ElTransition>
						<ElTransition>
							<p>
								Many queer clubs exist in Toronto, but they can only be found
								through instagram. To find clubs, an individual has to find
								accounts by looking at clubs’ following or recommended accounts
								and view each profile one by one.
							</p>
						</ElTransition>
					</div>
				</div>

				<div className="mt-8">
					<Lightbox imgSrc={StyleGuide} header={true} />
				</div>

				<div className="mt-8">
					<Lightbox imgSrc={Header} header={true} />
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
					link="https://queerclubdirectory.com/"
				/>
			</div>
			<ProjectFooter />
		</PageTransition>
	);
};

export default Qcdt;
