'use client';

import React from 'react';
import ReactPlayer from 'react-player/lazy';
import ElTransition from './ElTransition';

const Video = ({ src }: any) => {
	return (
		<>
			<ElTransition delay={2000}>
				<ReactPlayer width="100%" height="80vh" url={src} />
			</ElTransition>
		</>
	);
};

export default Video;
