import React from 'react';

const Close = ({ onClick }: any) => {
	return (
		<div onClick={onClick}>
			<svg
				width="26"
				height="26"
				viewBox="0 0 26 26"
				fill="none"
				className="cursor-pointer fixed right-4 top-4"
				xmlns="http://www.w3.org/2000/svg">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M24.3652 25.559L0.39209 1.58585L1.8063 0.171632L25.7794 24.1448L24.3652 25.559Z"
					fill="white"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M25.7794 1.58585L1.8063 25.559L0.39209 24.1448L24.3652 0.171631L25.7794 1.58585Z"
					fill="white"
				/>
			</svg>
		</div>
	);
};

export default Close;
