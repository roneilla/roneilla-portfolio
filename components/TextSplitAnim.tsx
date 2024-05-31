'use client';
import React from 'react';

const TextSplitAnim = ({ text, initDelay = 0.25 }: any) => {
	return (
		<span aria-label={text}>
			{text.split('').map((char: any, index: number) => {
				if (char === `\n`) return <br key={index} />;
				return (
					<span
						aria-hidden="true"
						key={index}
						style={{ animationDelay: `${initDelay + 0.025 * index}s` }}>
						{char}
					</span>
				);
			})}
		</span>
	);
};

export default TextSplitAnim;
