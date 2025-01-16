import React from 'react';
import ElTransition from './ElTransition';

interface ColProps {
	title: string;
	body: any;
}

interface CreditProps {
	title?: string;
	firstCol: ColProps;
	secondCol?: ColProps;
	thirdCol?: ColProps;
	link?: string;
}

const CreditSection = ({
	title = 'Credits',
	firstCol,
	secondCol,
	thirdCol,
	link,
}: CreditProps) => {
	return (
		<div className="mt-20">
			<ElTransition>
				<h2 className="mb-4">{title}</h2>
				<div className="flex flex-col md:flex-row gap-8 md:gap-16">
					<div className="flex-initial">
						<p className="font-medium">{firstCol.title}</p>
						<p className="text-black dark:text-gray-200">{firstCol.body}</p>
						{link && (
							<div className="mt-4 hover:underline">
								<a href={link} target="_blank">
									Visit the site ↗
								</a>
							</div>
						)}
					</div>
					{secondCol && (
						<div>
							<p className="font-medium">{secondCol.title}</p>
							<p className="text-black dark:text-gray-200">{secondCol.body}</p>
						</div>
					)}
					{thirdCol && (
						<div>
							<p className="font-medium">{thirdCol.title}</p>
							<p className="text-black dark:text-gray-200">{thirdCol.body}</p>
						</div>
					)}
				</div>
			</ElTransition>
		</div>
	);
};

export default CreditSection;
