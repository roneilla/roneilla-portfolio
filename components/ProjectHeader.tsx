import React from 'react';
import TextSplitAnim from './TextSplitAnim';
import LineSplitAnim from './LineSplitAnim';

const ProjectHeader = ({ title, description, role }: any) => {
	return (
		<div className="mt-8 md:w-2/3">
			<h1 className="h1 displayFont splitAnim">
				<TextSplitAnim text={title} />
			</h1>
			<p className="text-xl mt-2 splitAnim">
				<LineSplitAnim text={[description]} initDelay={0.75} />
			</p>
			<p className="text-gray-500 dark:text-gray-300 mt-8 splitAnim">
				<LineSplitAnim text={[`Role: ${role}`]} initDelay={1} />
			</p>
		</div>
	);
};

export default ProjectHeader;
