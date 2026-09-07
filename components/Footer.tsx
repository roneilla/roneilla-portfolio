'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ElTransition from './ElTransition';
import { useScroll, animated, useSpring } from 'react-spring';

import FooterBg from '@/app/assets/footer-bg.svg'
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

	const LinkIcon = () => {
		return (<span className="inline-block ml-1 align-middle">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4">
				<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
			</svg>
		</span>)
	}

	return (
		<footer className='mt-10'
		// style={{ backgroundImage: `url(${FooterBg.src})` }}
		>
			<Image src={FooterBg} alt="" className='rounded-none' />
			<div className="text-center px-4 pt-6 pb-12 footer">
				<div className="flex-initial flex flex-row gap-8 justify-center">
					<Link
						href="https://www.linkedin.com/in/roneilla/"
						target="_blank"
						className="hover:underline md:text-lg">
						LinkedIn<LinkIcon />
					</Link>
					<Link
						href="https://github.com/roneilla"
						target="_blank"
						className="hover:underline md:text-lg">
						GitHub<LinkIcon />
					</Link>
					<Link
						href="mailto:roneillabumanlag@gmail.com"
						target="_blank"
						className="hover:underline md:text-lg">
						Email
						<LinkIcon />
					</Link>
				</div>
				<p className="text-sm mt-2">
					Designed and built by Roneilla Bumanlag © 2026
				</p>
			</div>
		</footer>
	);
};

export default Footer;
