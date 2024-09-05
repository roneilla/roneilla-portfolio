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
import CurrentIssues from '@/app/assets/alfred-search/current-issues.png';
import TestScreenshot from '@/app/assets/alfred-search/test-screenshot.png';
import TwoColEx from '@/app/assets/alfred-search/two-col-example.png';
import FlexibleSearch from '@/app/assets/alfred-search/flexible-search.png';
import MoreContext from '@/app/assets/alfred-search/more-context.png';
import ElTransition from '@/components/ElTransition';

const AlfredSearch = () => {
	return (
		<PageTransition>
			<div className="section">
				<ProjectHeader />
				<div className="mt-8">
					<Lightbox imgSrc={Header} header={true} />
				</div>

				<div className="mt-24">
					<div className="md:w-1/2">
						<ElTransition>
							<p className="monoFont mb-4 text-sm">The problem</p>
						</ElTransition>
						<ElTransition>
							<h2 className="h2 displayFont mb-4">
								Internal support ticket times are increasing.
							</h2>
						</ElTransition>
						<ElTransition>
							<p>
								Wagepoint’s support agents use an internal tool called Alfred.
								They have difficulty tracking down which company they’re
								providing support to. Multiple agents mentioned spending time to
								“carry out little investigations”, “deep dive”, and “dig around”
								due to the lack of information the current search function
								provides. Sometime they’d have to email back and forth for this
								information.
							</p>
						</ElTransition>
					</div>
					<div className="flex space-between gap-4 mt-6 flex-col md:flex-row">
						<div className="borderCard">
							<p>
								Agents would receive emails from administrators who weren’t
								authorized, or admins wouldn’t use the official company name
								(they would use the DBA name).
							</p>
						</div>
						<div className="borderCard">
							<p>
								Duplicate accounts or company were common. Multiple people from
								the same company would make an account or use the wrong email to
								sign up.
							</p>
						</div>
						<div className="borderCard">
							<p>
								Only administrators are allowed to make an account for employees
								for paystub access, but sometime employees mistakenly sign up
								for a company payroll account.
							</p>
						</div>
					</div>
				</div>

				<div className="mt-24 py-24 text-center">
					<p className="text-2xl">
						“Some customers don’t tell us who they are in the ticket and their
						email is generic. It’s a daily occurrence. It’s{' '}
						<i>very very frustrating.</i>”
					</p>
					<p className="text-gray-700 mt-2">Customer support specialist</p>
				</div>

				<div className="mt-24">
					<ElTransition>
						<h3 className="h2 displayFont mb-4 text-center">
							The current experience and its issues
						</h3>
					</ElTransition>

					<div className="mt-8">
						<div className="imgMax900">
							<Lightbox imgSrc={CurrentIssues} header={true} />
						</div>
					</div>

					<div className="flex space-between gap-4 mt-8 flex-col md:flex-row">
						<div className="flex-1">
							<p className="font-medium">Hidden access</p>
							<p className="text-gray-600">
								The search functions were nested in two different pages, one for
								clients and one for partners.
							</p>
							{/* <button className="greyBtn mt-2">Focus on this</button> */}
						</div>
						<div className="flex-1">
							<p className="font-medium">Lack of system status</p>
							<p className="text-gray-600">
								The search function simply filtered the table. The search
								results did not display what information matches the search
								criteria.
							</p>
							{/* <button className="greyBtn mt-2">Focus on this</button> */}
						</div>
						<div className="flex-1">
							<p className="font-medium">Inflexibility</p>
							<p className="text-gray-600">
								The search criteria was lacking. Agents couldn’t quickly find
								what they needed with the information they had.
							</p>
							{/* <button className="greyBtn mt-2">Focus on this</button> */}
						</div>
					</div>
				</div>

				<div className="mt-24">
					<ElTransition>
						<p className="monoFont mb-4 text-sm">Listening to our users</p>
					</ElTransition>
					<ElTransition>
						<h2 className="h2 displayFont mb-4">Requirements</h2>
					</ElTransition>
					<ElTransition>
						<p>
							We chatted with the Alfred users which included support agents,
							payroll specialist, and risk agents to learn about what they
							needed in order to lower frustrations and make their workload more
							efficient.
						</p>
					</ElTransition>
					<div className="flex space-between gap-4 mt-8 flex-col md:flex-row">
						<div className="blueCard">
							<p>Identify account type</p>
							<p className="text-gray-600">
								“It would be good to be able to enter a name and find out if
								they’re a client or partner”
							</p>
						</div>
						<div className="blueCard">
							<p>Expand search criteria</p>
							<p className="text-gray-600">
								Agents requested to include more information for the search
								criteria (i.e email, phone number, DBA, company ID).
							</p>
						</div>
						<div className="blueCard">
							<p>Include closed/archived accounts</p>
							<p className="text-gray-600">
								“Sometimes users will reach out because they aren’t able to get
								in, they don’t realize they were archived (employees)”
							</p>
						</div>
						<div className="blueCard">
							<p>Display the account’s roles</p>
							<p className="text-gray-600">
								“In 1.0, we searched by email address a lot. Now we have to ask
								for their company, we don’t have anything to identify them
								with.”
							</p>
						</div>
					</div>
				</div>

				<div className="mt-24 py-24 text-center">
					<p className="text-2xl">
						“Getting the insight before you potentially reach back out to a
						client, it just makes you feel a little <i>more empowered</i>.”
					</p>
					<p className="text-gray-700 mt-2">Customer support specialist</p>
				</div>

				<div className="mt-24">
					<ElTransition>
						<h2 className="h2 displayFont mb-4">
							We tested for the most common and most critical use cases
						</h2>
					</ElTransition>
					<ElTransition>
						<p>
							The most common search terms were admin name, email, or company
							name. So we tested use cases based on multiple matching results
							from the search criteria.
						</p>
					</ElTransition>
				</div>

				<div className="mt-8">
					<div className="imgMax900">
						<Lightbox imgSrc={TestScreenshot} header={true} />
					</div>
				</div>

				<div className="mt-24">
					<ElTransition>
						<h3 className="h2 displayFont mb-4 text-center">
							We asked agents for feedback.
						</h3>
					</ElTransition>

					<div className="bg-gray-100 p-8 rounded flex gap-8 flex-col md:flex-row">
						<div>
							<p className="monoFont">Needs improvement</p>
							<p className="text-xl my-4">The two columns were confusing</p>
							<p className="text-gray-600">
								“My eye is drawn to the first column”
								<br />
								“My instinct is to look on the left for my results”
								<br />
								“I’m a little confused... Is the left company name and the right
								admins?”
							</p>
						</div>

						<Lightbox imgSrc={TwoColEx} header={true} />
					</div>

					<div className="flex gap-4 mt-4 flex-col md:flex-row">
						<div className="flex-1 bg-gray-100 p-8 rounded">
							<p className="monoFont">Needs improvement</p>
							<p className="text-xl my-4">They wanted more ease-of-use</p>
							<p className="text-gray-600">
								Two users requested small changes that lessen the friction.
								<br />
								“Automatically select input field on open. small change that
								saves lots of time overall”
								<br />
								“If I go into the page and it’s not the right one, I’d like to
								go back into the search and not have to plug in information
								again”
							</p>
						</div>

						<div className="flex-1 bg-gray-100 p-8 rounded">
							<p className="monoFont">Liked</p>
							<p className="text-xl my-4">
								People loved seeing the type of account tooltip/icon
							</p>
							<p className="text-gray-600">
								They can now see the company type without having to go into the
								account. Because the icons are different, they can also start to
								learn what each mean. Eventually they might not need to hover.
								<br />
								“This is so helpful, the partner team often say, ‘I want to know
								if this company is tied to a partner account or not’ ”
							</p>
						</div>
					</div>
				</div>

				<div className="mt-24">
					<div className="p-8 rounded bg-yellow-50 flex gap-4">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
								/>
							</svg>
						</div>

						<div>
							<p className="font-medium">
								Agents used either company type or company status to determine
								which result is correct.
							</p>
							<p>
								During testing we validated the need to display the company
								status and a company type identifier. This helped them determine
								faster which team or support agent is best suited to help them.
								Seeing the administrator role also helped agents correctly
								determine what level of authority they had - making sure we only
								give them the information they have permission to receive.
							</p>
						</div>
					</div>
				</div>

				<div className="mt-24">
					<ElTransition>
						<p className="monoFont mb-4 text-sm">What we shipped</p>
					</ElTransition>
					<ElTransition>
						<h2 className="text-4xl mb-4">The Alfred Global Search</h2>
					</ElTransition>
					<ElTransition>
						<p>
							The new search function lives in the global navigation bar,
							allowing all users to access the search function from anywhere.
							This also removes one step of the process as it allows agents to
							search without needing to visit each page (client or partner)
							separately.
						</p>
					</ElTransition>

					<div className="mt-8">
						<Lightbox imgSrc={GlobalF} header={true} />
					</div>
				</div>
				<div className="mt-24">
					<div className="sm:w-1/2">
						<ElTransition>
							<h2 className="h2 displayFont mb-4">Flexible search display</h2>
						</ElTransition>
						<ElTransition>
							<p>
								The results display offer flexibility to display different types
								of information match.
							</p>
						</ElTransition>
					</div>

					<div className="mt-8">
						<Lightbox imgSrc={FlexibleSearch} header={true} />
					</div>
				</div>

				<div className="mt-24">
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
						<Lightbox imgSrc={MoreContext} header={true} />
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
