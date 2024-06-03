'use client';

import Video from '@/components/Video';
import React from 'react';
import Lightbox from '@/components/Lightbox';

import BgWide from '@/app/assets/tpol/boardgame-wideview-2.png';
import BgClose from '@/app/assets/tpol/boardgame-closeup.png';
import Cards from '@/app/assets/tpol/cards.png';
import Guidebook from '@/app/assets/tpol/guidebook.png';
import PlayerDash from '@/app/assets/tpol/player-dashboard.png';
import PlayerSetup from '@/app/assets/tpol/player-setup.png';
import GamemasterDash from '@/app/assets/tpol/gamemaster-dashboard.png';
import PageTransition from '@/components/PageTransition';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectFooter from '@/components/ProjectFooter';
import ElTransition from '@/components/ElTransition';
import CreditSection from '@/components/CreditSection';

const Tpol = () => {
	return (
		<PageTransition>
			<div className="section">
				<ProjectHeader />
				<div className="rounded mt-8">
					<Video src={'https://www.youtube.com/watch?v=IDXo6CgnCGc'} />
				</div>

				<div className="mt-12">
					<div className="sm:w-1/2">
						<ElTransition>
							<h2 className="h2 displayFont mb-4">{`Board game`}</h2>
						</ElTransition>
						<ElTransition>
							<p>
								The Price of Life is a board game that will teach young adults
								the basics of personal finance, strategy, and planning. While
								making financial mistakes in a risk-free environment, users will
								learn key lessons and be able to apply and practice their new
								knowledge and skills.
								<br />
								<br />
								After creating a financial plan, young adults will be challenged
								to overcome hypothetical obstacles inspired by real world events
								that involve being financially prepared through the ups and
								downs of the economy.
							</p>
						</ElTransition>
					</div>
					<div className="mt-8">
						<Lightbox
							imgSrc={BgWide}
							altText="A board game laid out with a deck of cards and a guidebook. There are 4 pieces of cones (player pieces) on the board."
						/>
					</div>
					<div className="flex gap-8 mt-8 flex-col sm:flex-row">
						<div className="flex-1">
							<Lightbox imgSrc={BgClose} className="h-full object-cover" />
						</div>
						<div className="flex-1">
							<Lightbox imgSrc={Guidebook} />
						</div>
						<div className="flex-1">
							<Lightbox imgSrc={Cards} />
						</div>
					</div>
				</div>

				<div className="mt-12">
					<div className="sm:w-1/2">
						<ElTransition>
							<h2 className="h2 displayFont mb-4">{`Gamemaster's dashboard`}</h2>
						</ElTransition>
						<ElTransition>
							<p>
								When a player lands on a stock space, the stock market opens and
								everyone is able to purchase a stock. The stock prices change
								every few minutes and the changes could be big or small and
								positive or negative.
								<br />
								<br /> The gamemaster controls the purchases. Players can view
								the stock prices at any time so they can sell when they see that
								their stock is doing well.
							</p>
						</ElTransition>
					</div>
					<div className="mt-8 ">
						<Lightbox
							background="tpol-blue"
							imgSrc={GamemasterDash}
							maxHeight={500}
						/>
					</div>
				</div>

				<div className="mt-12">
					<div className="sm:w-1/2">
						<ElTransition>
							<h2 className="h2 displayFont mb-4">{`Player's dashboard`}</h2>
						</ElTransition>
						<ElTransition>
							<p>
								The companion app reduces the friction for players by taking on
								the tasks of tracking and calculations. It also provides easy
								access to resources for all users. During setup, players must
								choose a career, set a budget, and choose a goal. Through this
								task, they learn how to create a basic financial plan.
								<br />
								<br />
								While playing during rounds, players must keep track of their
								money through the finance tracker. It helps them develop money
								management and tracking skills.
							</p>
						</ElTransition>
					</div>
					<div className="flex gap-8 mt-4 flex-col sm:flex-row">
						<Lightbox background="tpol-yellow" imgSrc={PlayerSetup} />
						<Lightbox background="tpol-blue" imgSrc={PlayerDash} />
					</div>
				</div>

				<CreditSection
					firstCol={{
						title: 'About',
						body: `This is an (individual) capstone project`,
					}}
					secondCol={{
						title: 'Year',
						body: '2021',
					}}
				/>
			</div>
			<ProjectFooter />
		</PageTransition>
	);
};

export default Tpol;
