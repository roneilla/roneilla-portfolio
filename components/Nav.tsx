'use client';

import React, { useEffect, useState } from 'react';
import Button from './Button';
import ThemeSwitcher from './ThemeSwitcher';
import { usePathname, useRouter } from 'next/navigation';
import { useSpring, animated } from 'react-spring';
import Logo from './Logo';

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

	return (
		<>
			<animated.div className={`bg-white dark:bg-black z-20 `}>
				<div className="container px-8 pt-4 flex gap-4 items-center">
					{pathname != '/' ? (
						<Button
							withArrow={true}
							handleClick={(e: any) => handleClick({ e, link: '/' })}>
							Back to home
						</Button>
					) : (
						<div onClick={(e) => handleClick({ e, link: '/' })}>
							<h1 className="font-medium">Roneilla Bumanlag</h1>
						</div>
					)}

					<div className="flex-1 flex items-center justify-end gap-4">
						{/* <ThemeSwitcher /> */}
						{/* <Button>Contact me</Button> */}
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
