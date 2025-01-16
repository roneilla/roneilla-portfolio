import PageTransition from '@/components/PageTransition';
import Video from '@/components/Video';
import React from 'react';
import Lightbox from '@/components/Lightbox';

import ProjectHeader from '@/components/ProjectHeader';
import ProjectFooter from '@/components/ProjectFooter';
import CreditSection from '@/components/CreditSection';

import Header from '@/app/assets/wp-ds/header.png';
import Audit from '@/app/assets/wp-ds/audit.png';
import LocalStyles from '@/app/assets/wp-ds/localStyles.png';
import Variables from '@/app/assets/wp-ds/variables.png';
import CardAnatomy from '@/app/assets/wp-ds/cardAnatomy.png';
import CardLayout from '@/app/assets/wp-ds/cardAutoLayout.gif';
import MultiProduct from '@/app/assets/wp-ds/multiProduct.png';
import ThemeSelector from '@/app/assets/wp-ds/themeSelector.png';

import ElTransition from '@/components/ElTransition';
import projectData from '../data';
import TextSection from '@/components/textSection';

const Wpds = () => {
	const index = projectData.findIndex((data: any) => data.id === 'wp-ds');

	return (
		<PageTransition>
			<div className="section">
				<ProjectHeader />
				<div className="mt-8">
					<Lightbox imgSrc={Header} header={true} />
				</div>
			</div>

			<div className="bg-gray-200">
				<div className="section py-24">
					<div className="flex flex-col md:flex-row gap-8">
						<div className="flex-1">
							<h2 className="mr-8">{projectData[index].description}</h2>

							<div className="mt-8 mb-4">
								<p>Role</p>
								<p className="text-gray-600">UX Designer and Developer</p>
							</div>

							<div>
								<p>Team</p>
								<p className="text-gray-600">
									<ul>
										<li>5 designers</li>
										<li>1 UX manager</li>
										<li>10+ front-end developers</li>
									</ul>
								</p>
							</div>
						</div>
						<div className="flex-1">
							<h3 className="mb-4">Overview</h3>
							<p>
								As the design team grew, we realized a need for improving,
								consolidating, and enhancing the design system. New figma
								updates allowed us to have more efficient processes, but this
								required time to learn, implement, and educate.
							</p>
							<p className="mt-2">
								Our initial challenges were inconsistencies, a bloated library,
								and that it took too much time to make a prototype using the
								existing one. Throughout the project, we consolidated similar
								components, created more structure, and laid down some
								guidelines for usage, expansion, and implementation.
							</p>

							<h3 className="mt-8 mb-4">Teamwork</h3>
							<p>
								This project was a team project across 5+ UX designers, a UX
								manager, and many front-end developers. I started this project
								as a UX designer and converted to a UX developer after a few
								months – expanding my reach and impact from Figma to development
								and production.
							</p>

							<h3 className="mt-8 mb-4">Impact & results</h3>
							<p>
								The initial and continuous work on the design system has
								resulted in faster outputs and less rework. Designer are able to
								create prototypes and proof of concepts quickly, rather than
								spending time making lo-fi frames. Additionally, the front-end
								quality has improved due to the ongoing efforts and
								collaboration with the dev team.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="section py-24">
				<TextSection title="Auditing the current design system">
					<p className="mb-4">
						Before I joined Wagepoint, the design system was created for a team
						of two designers and tens of developers. Its purpose was to speed up
						the design process and provide guidance for developers who were
						building the component library.
					</p>
					<p>
						There were multiple components that had the same or similar purpose
						and functionality. The design system was not utilizing Figma’s new
						features that made the process more efficient.
					</p>
				</TextSection>
				<div className="mt-8">
					<Lightbox
						imgSrc={Audit}
						header={true}
						description={`The design system was bloated with many variants for each component
						which causing longer load times, time-consuming updates, and choice
						overload.`}
						textColor="text-gray-600 "
					/>
				</div>
			</div>
			<div className="bg-black text-white">
				<div className="section py-24">
					<div>
						<TextSection title="Leveraging variables and design tokens">
							<p>
								After going through brand colour changes, we realized a need for
								tokenizing the design system and our base values (colours,
								radius, spacing). The effort we spend now would greatly save
								more effort in making changes down the line – plus, we can make
								sure we’re providing a consistent experience throughout our
								products.
							</p>
						</TextSection>
						<div className="mt-8">
							<Lightbox
								imgSrc={Variables}
								header={true}
								description={`I implemented new variable collections that are set up similarly
							to MUI’s palette, which makes it easier to draw design and dev
							connections.`}
							/>
						</div>
						<div className="mt-8">
							<Lightbox
								imgSrc={LocalStyles}
								header={true}
								description={`After creating variables, we updated the colour and typography
							styles to match MUI’s palette names.`}
							/>
						</div>
					</div>
					<div className="mt-24">
						<TextSection title="Stripping it back using the Atomic Design Framework">
							<p className="mb-4">
								As the team grew, we needed to adjust the design system so that
								it remains structured for consistency, but flexible to allow
								designers creativity within their designs. We set up the
								components using the atomic design framework.
							</p>
							<p>
								This maintains consistency while allowing for the detaching of
								components (for example, the cards). We implemented variables to
								make sure borders and spacing remained consistent for detached
								components.
							</p>
						</TextSection>
						<div className="mt-8">
							<Lightbox imgSrc={CardAnatomy} header={true} />
						</div>
					</div>
					<div className="mt-24">
						<TextSection title="Utilizing auto-layout to create simpler but flexible components">
							<p className="mb-4">
								We previously had a variant for specific sizes, this caused the
								file to load slowly. With the introduction of the auto-layout
								feature, we decreased the number of variants and made each
								component responsive.
							</p>
							<p className="mb-4">
								This also allowed designs to easily consider multiple use cases
								(thank you for your service, John Areallylonglastname).
							</p>
							<p>
								As a developer, I had the front-end perspective of balancing
								impactful design with effort. I’m usually the first person to
								provide feedback and estimates allowing the designers to scope
								up or scope down.
							</p>
						</TextSection>
						<div className="mt-8">
							<Lightbox imgSrc={CardLayout} header={true} />
						</div>
					</div>
				</div>
			</div>
			<div className="section py-24">
				<div className="flex flex-col md:flex-row gap-8">
					<div className="flex-1 pr-8">
						<div className="sticky top-40">
							<TextSection
								fullWidth={true}
								title="Creating a multi-product design system">
								<p>
									Wagepoint suite includes three consumer products as well as
									one internal tool, each with own primary colour. We utilized
									Figma’s variables features and implement design tokens using a
									JavaScript object.
								</p>
							</TextSection>
						</div>
					</div>
					<div className="flex-1">
						<Lightbox imgSrc={ThemeSelector} header={true} />
					</div>
				</div>

				<div className="mt-8">
					<Lightbox imgSrc={MultiProduct} header={true} />
				</div>
			</div>

			<ProjectFooter />
		</PageTransition>
	);
};

export default Wpds;
