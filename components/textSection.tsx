import React from 'react';

const TextSection = ({ title, children, fullWidth }: any) => {
	return (
		<div className={`${fullWidth ? '' : 'md:w-1/2'} pr-8`}>
			<h2 className="mb-4">{title}</h2>
			{children}
		</div>
	);
};

export default TextSection;
