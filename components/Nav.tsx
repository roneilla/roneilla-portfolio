'use client';

import React, { useEffect, useState } from 'react';
import Button from './Button';
import ThemeSwitcher from './ThemeSwitcher';
import { usePathname, useRouter } from 'next/navigation';
import { useSpring, animated } from 'react-spring';
import Logo from './Logo';
import Link from 'next/link';

const Nav = () => {
	const pathname = usePathname();
	const router = useRouter();

	const [loading, setLoading] = useState(false);

	const handleClick = ({ e, link }: any) => {
		e.preventDefault();

		if (pathname === '/') return;

		setLoading(true);

		setTimeout(() => {
			router.push(link);
		}, 500);

		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	const properties = {
		start: {
			top: '100vh',
			redD: 200,
			blueD: 100,
			yellowD: 0,
		},
		end: {
			top: '0',
			redD: 0,
			blueD: 100,
			yellowD: 200,
		},
		springConfig: { tension: 250, friction: 35 },
	};

	const { top, redD, blueD, yellowD } = properties[loading ? 'end' : 'start'];

	const red = useSpring({ top, delay: redD, config: properties.springConfig });
	const blue = useSpring({
		top,
		delay: blueD,
		config: properties.springConfig,
	});
	const yellow = useSpring({
		top,
		delay: yellowD,
		config: properties.springConfig,
	});

	const linkStyle = 'px-2 py-2/3 rounded-full hover:bg-gray-200';
	const currentLink = 'bg-gray-200';

	return (
		<>
			<animated.div className={`z-20 fixed top-0 left-0 w-full`}>
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
						<Link
							href="/"
							className={`${linkStyle} ${pathname === '/' ? currentLink : ''}`}>
							Work
						</Link>
						<Link
							href="/archive"
							className={`${linkStyle} ${
								pathname === '/archive' ? currentLink : ''
							}`}>
							Archive
						</Link>
					</div>
				</div>
			</animated.div>

			<animated.div
				style={red}
				className="w-full fixed left-0 h-full r-p3 z-50"
			/>
			<animated.div
				style={blue}
				className="w-full fixed left-0 h-full r-p2 z-50"
			/>
			<animated.div
				style={yellow}
				className="w-full fixed left-0 h-full r-p1 z-50"
			/>
		</>
	);
};

export default Nav;
