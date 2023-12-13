'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ElTransition from './ElTransition';
import { useScroll, animated, useSpring } from 'react-spring';

const Footer = () => {
	const [isScrollBottom, setIsScrollBottom] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const bottom =
				Math.ceil(window.innerHeight + window.scrollY) >=
				document.documentElement.scrollHeight - 50;

			if (bottom) return setIsScrollBottom(true);
			return setIsScrollBottom(false);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const properties = {
		start: {
			opacity: 0,
			transform: 'translate(0px, 16px)',
		},
		end: {
			opacity: 1,
			transform: 'translate(0px, 0px)',
		},
		springConfig: { tension: 250, friction: 35 },
	};

	const { opacity, transform } = properties[isScrollBottom ? 'end' : 'start'];
	const elAnim = useSpring({
		opacity,
		transform,
		config: properties.springConfig,
	});

	return (
		<footer className="footer text-black flex flex-col">
			<animated.div
				style={elAnim}
				className="text-center border border-solid border-black py-16">
				<Link
					href="mailto:roneillabumanlag@gmail.com"
					target="_blank"
					className="hover:underline text-6xl displayFont">
					roneillabumanlag@gmail.com
				</Link>
			</animated.div>
			{/* <div className="container  flex "> */}
			<animated.div style={elAnim} className="flex flex-wrap">
				<div className="footer-btn footer-btn-left">
					<Link
						href="https://www.linkedin.com/in/roneilla/"
						target="_blank"
						className="hover:underline">
						LinkedIn ↗
					</Link>
				</div>
				<div className="footer-btn footer-btn-right">
					<Link
						href="https://github.com/roneilla"
						target="_blank"
						className="hover:underline">
						GitHub ↗
					</Link>
				</div>
				{/* <Link
						href="mailto:roneillabumanlag@gmail.com"
						target="_blank"
						className="hover:underline">
						Email ↗
					</Link> */}
				<div className="footer-btn footer-btn-left">
					<p>Built with NextJS</p>
				</div>
				<div className="footer-btn footer-btn-right">
					<p>© Roneilla Bumanlag 2023</p>
				</div>
			</animated.div>
			{/* <animated.div
					style={elAnim}
					className="flex-1 flex flex-col gap-2 items-end text-right">
					<p>Built with NextJS</p>
					<p>© Roneilla Bumanlag 2023</p>
				</animated.div> */}
			{/* </div> */}
		</footer>
	);
};

export default Footer;
