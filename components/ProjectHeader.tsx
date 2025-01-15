'use client';
import React from 'react';
import TextSplitAnim from './TextSplitAnim';
import LineSplitAnim from './LineSplitAnim';
import { usePathname } from 'next/navigation';
import projectData from '@/app/data';

const ProjectHeader = () => {
	const pathname = usePathname();

	const index = projectData.findIndex((data: any) => data.link === pathname);

	return (
		<div className="sm:mt-8 pb-8 text-center">
			<h1 className="h1 splitAnim">
				<TextSplitAnim text={projectData[index].title} />
			</h1>
			<p className="mt-2 splitAnim">
				<LineSplitAnim
					text={[projectData[index].description]}
					initDelay={0.75}
				/>
			</p>
			{/* <p className="text-gray-600 dark:text-gray-300 mt-8 splitAnim">
				<LineSplitAnim
					text={[`Role: ${projectData[index].role}`]}
					initDelay={1}
				/>
			</p> */}
		</div>
	);
};

export default ProjectHeader;
