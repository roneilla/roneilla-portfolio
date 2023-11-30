'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import projectData from '@/app/data';
import PageOutTransition from './PageOutTransition';

const ProjectFooter = () => {
	const pathname = usePathname();

	const [currentInd, setCurrentInd] = useState<number>(
		projectData.findIndex((project) => project.link === pathname)
	);

	const [prev, setPrev] = useState<number>(
		currentInd > 0 ? currentInd - 1 : projectData.length - 1
	);

	const [next, setNext] = useState<number>(
		currentInd >= projectData.length - 1 ? 0 : currentInd + 1
	);

	return (
		<>
			<div className="flex justify-between px-8 py-16 mt-4">
				<PageOutTransition link={projectData[prev].link} className="footerBtn">
					<h2 className="h2 displayFont">Previous</h2>
					<p className="text-gray-500 dark:text-gray-300">
						{projectData[prev].title}
					</p>
				</PageOutTransition>
				<PageOutTransition link={projectData[next].link} className="footerBtn">
					<div className="text-right">
						<h2 className="h2 displayFont">Next</h2>
						<p className="text-gray-500 dark:text-gray-300">
							{projectData[next].title}
						</p>
					</div>
				</PageOutTransition>
			</div>
		</>
	);
};

export default ProjectFooter;
