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
}

const CreditSection = ({
	title = 'Credits',
	firstCol,
	secondCol,
	thirdCol,
}: CreditProps) => {
	return (
		<div className="mt-20">
			<ElTransition>
				<h2 className="h2 displayFont mb-4">{title}</h2>
				<div className="flex flex-col md:flex-row gap-8 md:gap-16">
					<div className="flex-initial">
						<p className="font-medium">{firstCol.title}</p>
						<p className="text-gray-600">{firstCol.body}</p>
					</div>
					{secondCol && (
						<div>
							<p className="font-medium">{secondCol.title}</p>
							<p className="text-gray-600">{secondCol.body}</p>
						</div>
					)}
					{thirdCol && (
						<div>
							<p className="font-medium">{thirdCol.title}</p>
							<p className="text-gray-600">{thirdCol.body}</p>
						</div>
					)}
				</div>
			</ElTransition>
		</div>
	);
};

export default CreditSection;
