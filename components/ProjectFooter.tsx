'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import projectData from '@/app/data';
import PageOutTransition from './PageOutTransition';

const ProjectFooter = () => {
	const pathname = usePathname();

	const [currentInd, setCurrentInd] = useState<number>(
		projectData.findIndex((project: any) => project.link === pathname)
	);

	const [prev, setPrev] = useState<number>(
		currentInd > 0 ? currentInd - 1 : projectData.length - 1
	);

	const [next, setNext] = useState<number>(
		currentInd >= projectData.length - 1 ? 0 : currentInd + 1
	);

	return <div className="pt-8"></div>;
	return (
		<>
			<div className="flex justify-between px-8 py-16 mt-4">
				<PageOutTransition link={projectData[prev].link} className="footerBtn">
					<p className="text-xl">Previous</p>
					<p className="text-black dark:text-gray-200">
						{projectData[prev].title}
					</p>
				</PageOutTransition>
				<PageOutTransition link={projectData[next].link} className="footerBtn">
					<div className="text-right">
						<p className="text-xl">Next</p>
						<p className="text-black dark:text-gray-200">
							{projectData[next].title}
						</p>
					</div>
				</PageOutTransition>
			</div>
		</>
	);
};

export default ProjectFooter;
