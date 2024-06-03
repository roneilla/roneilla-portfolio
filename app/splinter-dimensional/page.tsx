import PageTransition from '@/components/PageTransition';
import Video from '@/components/Video';
import React from 'react';
import Lightbox from '@/components/Lightbox';

import Intro from '@/app/assets/sd/0-intro.gif';
import Training from '@/app/assets/sd/1-training.gif';
import Pineapple from '@/app/assets/sd/2-pineapple.gif';
import Peacock from '@/app/assets/sd/3 - peacock.gif';
import Dance from '@/app/assets/sd/5 - dance.gif';
import Stars from '@/app/assets/sd/7 - stars.gif';
import Frame from '@/app/assets/sd/frame.jpg';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectFooter from '@/components/ProjectFooter';
import ElTransition from '@/components/ElTransition';
import CreditSection from '@/components/CreditSection';

import RoadSign from '@/app/assets/sd/road-sign.jpg';
import MarketingPromo from '@/app/assets/sd/marketing-promo.jpg';
import SdMap from '@/app/assets/sd/sd-map.png';

const SdAr = () => {
	return (
		<PageTransition>
			<div className="section">
				<ProjectHeader />
				<div className="mt-8">
					<Video src={'https://www.youtube.com/watch?v=JuLZMBKozaE'} />
				</div>

				<div className="mt-8">
					<Lightbox imgSrc={MarketingPromo} />

					<div className="flex gap-8 mt-8 flex-col sm:flex-row imgHeight">
						<div className="flex-1">
							<Lightbox imgSrc={SdMap} />
						</div>
						<div className="flex-1">
							<Lightbox imgSrc={RoadSign} />
						</div>
					</div>
				</div>

				<div className="mt-12">
					<div className="sm:w-1/2">
						<ElTransition>
							<h2 className="h2 displayFont mb-4">Introduction & training</h2>
						</ElTransition>
						<ElTransition>
							<p>
								Users tap to place the Captain on the ground in front of them.
								They are introduced to the story and objective of the
								experience. The goal is to find all rifts by scanning AR markers
								scattered in the park and close them!
								<br />
								<br />
								The Captain guides them through a training stage where they
								learn what markers look like as well as actions they need to
								take to “close the rift”. There is audio feedback at each action
								so users know when their action was successful.
							</p>
						</ElTransition>
					</div>

					<div className="flex gap-8 mt-8 flex-col sm:flex-row imgHeight">
						<Lightbox
							background="sd-pink"
							imgSrc={Intro}
							className="phoneImg"
						/>

						<Lightbox
							background="sd-blue"
							imgSrc={Training}
							className="phoneImg"
						/>
					</div>
				</div>
				<div className="mt-12">
					<div className="sm:w-1/2">
						<ElTransition>
							<h2 className="h2 displayFont mb-4">Scavenger hunt finds!</h2>
						</ElTransition>
						<ElTransition>
							<p>
								These are examples of the rifts the users find during the
								scavenger hunt. The Captain stays “on the phone” with them
								through audio and guides them through what they need to do. The
								stages vary in themes to avoid repetitiveness.
							</p>
						</ElTransition>
					</div>

					<div className="flex gap-8 mt-8 flex-col sm:flex-row">
						<Lightbox
							background="sd-blue"
							imgSrc={Pineapple}
							className="phoneImg"
						/>

						<Lightbox
							background="sd-pink"
							imgSrc={Peacock}
							className="phoneImg"
						/>
					</div>
				</div>
				<div className="mt-12">
					<div className="sm:w-1/2">
						<ElTransition>
							<h2 className="h2 displayFont mb-4">Thanks and Next Steps</h2>
						</ElTransition>
						<ElTransition>
							<p>
								During the last stage, the users tap the screen to place a star
								in a position of their choosing. They can also see stars placed
								by others that have completed the experience to promote
								community. To promote sharing, we provided a filter that placed
								a frame with a picture of the Captain and a hashtag.
							</p>
						</ElTransition>
					</div>

					<div className="flex gap-8 mt-8 flex-col sm:flex-row">
						<Lightbox
							background="sd-pink"
							imgSrc={Dance}
							className="phoneImg"
						/>

						<Lightbox
							background="sd-blue"
							imgSrc={Stars}
							className="phoneImg"
						/>

						<Lightbox
							background="sd-purple"
							imgSrc={Frame}
							className="phoneImg"
						/>
					</div>
				</div>
				<CreditSection
					firstCol={{
						title: 'Team',
						body: (
							<>
								Writers & artists: David Jermyn, Anna Douglas, Richard Rotter
								<br />
								Interaction designer & developer: Roneilla Bumanlag
								<br />
								In collaboration with: Planet Fabulon, ASTOUND Group
							</>
						),
					}}
					secondCol={{
						title: 'Client',
						body: 'Luminato Festival',
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

export default SdAr;
