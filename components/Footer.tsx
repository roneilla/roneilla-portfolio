'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ElTransition from './ElTransition';
import { useScroll, animated, useSpring } from 'react-spring';

import Image from 'next/image';

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
		<footer className="text-center p-4 font-medium">
			<div className="flex-initial flex flex-row gap-8 justify-center">
				<Link
					href="https://www.linkedin.com/in/roneilla/"
					target="_blank"
					className="hover:underline md:text-lg">
					LinkedIn ↗
				</Link>
				<Link
					href="https://github.com/roneilla"
					target="_blank"
					className="hover:underline md:text-lg">
					GitHub ↗
				</Link>
				<Link
					href="mailto:roneillabumanlag@gmail.com"
					target="_blank"
					className="hover:underline md:text-lg">
					Email ↗
				</Link>
			</div>
			<p className="text-sm mt-1 md:mt-4">© Roneilla Bumanlag 2025</p>
		</footer>
	);
};

export default Footer;
