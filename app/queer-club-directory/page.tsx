import PageTransition from '@/components/PageTransition';
import Video from '@/components/Video';
import React from 'react';
import Lightbox from '@/components/Lightbox';

import ProjectHeader from '@/components/ProjectHeader';
import ProjectFooter from '@/components/ProjectFooter';
import CreditSection from '@/components/CreditSection';

import Header from '@/app/assets/queerdirectory/header.png';

const Qcdt = () => {
	return (
		<PageTransition>
			<div className="section">
				<ProjectHeader />

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