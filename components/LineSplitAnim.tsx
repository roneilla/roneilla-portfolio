'use client';
import React from 'react';

const LineSplitAnim = ({ text, initDelay = 0.5 }: any) => {
	return (
		<span aria-label={text}>
			{text.map((line: any, index: number) => {
				return (
					<>
						<span
							aria-hidden="true"
							key={index}
							style={{ animationDelay: `${initDelay + 0.5 * index}s` }}>
							{line}
						</span>
						<br key={index} />
					</>
				);
			})}
		</span>
	);
};

export default LineSplitAnim;
