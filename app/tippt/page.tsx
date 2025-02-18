import PageTransition from '@/components/PageTransition';
import Video from '@/components/Video';
import React from 'react';
import Lightbox from '@/components/Lightbox';

import Header from '@/app/assets/tippt/header.png';
import Screens from '@/app/assets/tippt/screens.png';
import Designsystem from '@/app/assets/tippt/designsystem.png';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectFooter from '@/components/ProjectFooter';
import ElTransition from '@/components/ElTransition';
import CreditSection from '@/components/CreditSection';
import { usePathname } from 'next/navigation';

const Tippt = () => {
	return (
		<PageTransition>
			<div className="section">
				<ProjectHeader />
				<div className="rounded mt-8">
					<Lightbox header imgSrc={Header} />
				</div>
				<div className="mt-12">
					<Lightbox imgSrc={Screens} />
				</div>

				<div className="mt-12">
					<div className="sm:w-1/2">
						<ElTransition>
							<h2 className="mb-4">Design System</h2>
						</ElTransition>
						<ElTransition>
							<p>
								I improved web accessibility and brand recognition by
								redesigning Tippt’s visual identity. I proposed and created a
								design system to keep the visual identity cohesive, as well as
								help the scalability of our platform.
							</p>
						</ElTransition>
					</div>

					<div className="mt-4">
						<Lightbox imgSrc={Designsystem} />
					</div>
				</div>

				<CreditSection
					firstCol={{
						title: 'Team',
						body: (
							<>
								Product manager: Nellie Spektor
								<br /> UX designers: Roneilla Bumanlag, Mina Malloy
								<br /> Sustainability expert: Delaney Martin
							</>
						),
					}}
					secondCol={{
						title: 'Year',
						body: '2020',
					}}
				/>
			</div>
			<ProjectFooter />
		</PageTransition>
	);
};

export default Tippt;
