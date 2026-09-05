'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { animated } from 'react-spring';
import PageOutTransition from './PageOutTransition';

const Nav = () => {
	const pathname = usePathname();


	const linkStyle = 'px-2 py-2/3 rounded-full hover:bg-gray-200';
	const currentLink = 'bg-gray-200';

	return (
		<>
			<animated.div className={`z-40 fixed top-0 left-0 w-full`}>
				<div className="px-8 pt-4 flex justify-center gap-4 items-center">
					{/* {pathname != '/' ? (
						<Button
							withArrow={true}
							handleClick={(e: any) => handleClick({ e, link: '/' })}>
							Back to home
						</Button>
					) : (
						<div onClick={(e) => handleClick({ e, link: '/' })}>
							<h1 className="font-medium">Roneilla Bumanlag</h1>
						</div>
					)} */}

					<div className="font-medium bg-white gap-4 px-3 py-2 flex rounded-full border border-gray-200 shadow-sm">
						{/* TODO: implement moving indicator between tabs */}
						<PageOutTransition
							link='/'
							className={`${linkStyle} ${pathname === '/' ? currentLink : ''}`}>
							<p>Work</p>
						</PageOutTransition>
						<PageOutTransition
							link='/archive'
							className={`${linkStyle} ${pathname === '/archive' ? currentLink : ''
								}`}>
							<p>Archive</p>
						</PageOutTransition>
					</div>
				</div>
			</animated.div>
		</>
	);
};

export default Nav;
