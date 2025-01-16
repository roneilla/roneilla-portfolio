'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Close from './Close';
import ElTransition from './ElTransition';

const Lightbox = ({
	imgSrc,
	altText,
	className,
	description,
	background,
	header,
	maxHeight,
	textColor,
}: any) => {
	const [open, setOpen] = useState(false);
	const ref = useRef<any>(null);

	const properties = {
		closed: {
			origOp: 1,
			opacity: 0,
			lightBoxOp: 'rgba(0,0,0,0)',
			top: '100vh',
			transform: 'scale(0)',
		},
		open: {
			origOp: 0,
			opacity: 1,
			lightBoxOp: 'rgba(0,0,0,0.5)',
			top: '0',
			transform: 'scale(1)',
		},
		springConfig: {
			mass: 1,
			tension: 300,
			friction: 26,
			// easing: 'easeOutExpo',
		},
	};

	const { opacity, transform } = properties[open ? 'open' : 'closed'];

	const backdropProps = useSpring({
		opacity,
		config: properties.springConfig,
	});

	const lightBoxProp = useSpring({
		// backgroundColor: lightBoxOp,
		opacity,
		transform,
		config: properties.springConfig,
	});

	const handleOpen = () => {
		setOpen(true);
		document.body.style.overflow = 'hidden';
	};

	const handleClose = () => {
		setOpen(false);
		document.body.style.overflow = 'visible';
	};

	const handleClick = (e: any) => {
		if (!ref.current?.contains(e.target)) return handleClose();
	};

	useEffect(() => {
		const handleKey = (e: any) => {
			if (e.code === 'Escape') {
				setOpen(false);
				document.body.style.overflow = 'visible';
			}
		};

		document.addEventListener('keydown', handleKey);
		return () => document.removeEventListener('keydown', handleKey);
	}, []);

	const DisplayImage = () => {
		return (
			<ElTransition>
				<Image
					style={{ maxHeight: maxHeight || 'none' }}
					priority={header}
					src={imgSrc}
					alt={altText}
					className={`cursor-pointer ${className}`}
					onClick={handleOpen}
				/>
			</ElTransition>
		);
	};

	return (
		<>
			<animated.div
				className={`backdrop ${open ? 'block' : 'hidden'}`}
				style={backdropProps}
			/>

			{open && <Close onClick={handleClose} />}

			<animated.div
				style={lightBoxProp}
				className={`lightbox`}
				onClick={handleClick}>
				<Image
					src={imgSrc}
					alt={altText}
					className={`cursor-pointer z-30 lightboxImg`}
					ref={ref}
				/>
			</animated.div>

			{background ? (
				<div
					className={`cursor-pointer flex-1 imgContainer ${background}`}
					onClick={handleOpen}>
					<DisplayImage />
				</div>
			) : (
				<DisplayImage />
			)}

			<p className={`${textColor} text-center mt-2 text-sm`}>{description}</p>
		</>
	);
};

export default Lightbox;
