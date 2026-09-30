import Tippt from '@/app/assets/tippt-thumbnail.png';
import Peanuts from '@/app/assets/peanuts-thumbnail.png';
import Sd from '@/app/assets/sd-thumbnail.png';
import Tpol from '@/app/assets/tpol-thumbnail.png';
import Qcdt from '@/app/assets/qcdt-thumbnail.png';
import Freshii from '@/app/assets/freshii-thumbnail.png';
import Wpds from '@/app/assets/wpds-thumbnail.png';
import AlfredSearch from '@/app/assets/alfredsearch-thumbnail.png';
import Verification from '@/app/assets/verification-thumbnail.png';
import WPAISummary from '@/app/assets/wpaisummary-thumbnail.png';
import SingleLogIn from '@/app/assets/singlelogin-thumbnail.png'
import Geofence from '@/app/assets/geofence-thumbnail.png'

const projectData = [
	// {
	// 	id: 'wp-verification',
	// 	title: `Increase plaid usage`,
	// 	link: '/wagepoint-verification',
	// 	description:
	// 		'Improving adoption and time-to-first-payroll by empowering users to select Instant verification',
	// 	image: Verification,
	// 	role: 'UX Designer',
	// 	size: 'w-full md:w-4/6',
	// },
	{
		preview: true,
		id: 'wp-aisummary',
		title: `AI Payroll Summary`,
		link: '/wagepoint-ai-summary',
		description:
			'Designed the product’s first AI feature to help admins catch anomalies and turn payroll data into actionable insights.',
		image: WPAISummary,
		role: 'UX Designer',
		size: 'w-full md:w-2/6',
		tags: ['Shipped'],
		category: 'selectedWork',
		impact: ['First AI feature shipped', 'Established new AI interaction patterns']
	},
	// {
	// 	preview: true,
	// 	id: 'wp-geofence',
	// 	title: `Geofenced clock in/out`,
	// 	link: '/wagepoint-geofence',
	// 	description:
	// 		'Designed geofencing capabilities for employee time tracking, helping businesses manage where employees can clock in and out.',
	// 	image: Geofence,
	// 	role: 'UX Designer',
	// 	size: 'w-full md:w-2/6',
	// 	tags: ['Shipped'],
	// 	category: 'selectedWork',
	// 	impact: ['First AI feature shipped', 'Established new AI interaction patterns']
	// },
	{
		preview: true,
		id: 'wp-singlelogin',
		title: `Single Login`,
		link: '/wagepoint-single-login',
		description:
			'Enabled users to work across multiple companies with a single account, while making it easier to navigate between the businesses they manage.',
		image: SingleLogIn,
		role: 'UX Designer',
		size: 'w-full md:w-2/6',
		tags: ['Shipped'],
		category: 'selectedWork',
		impact: ['First AI feature shipped', 'Established new AI interaction patterns']
	},
	{
		id: 'wp-ds',
		title: `Vault Design System`,
		link: '/wagepoint-design-system',
		description:
			'Evolving our design system across Figma and Storybook. Designed components, shipped code, and improved team practices.',
		image: Wpds,
		role: 'UX Designer & Developer',
		size: 'w-full md:w-2/6',
		tags: ['UX Development'],
		category: 'selectedWork',
		impact: ['Designed + coded components', 'Improved documentation and contribution practices', 'Improved component to decrease detaching']
	},
	{
		id: 'wp-alfredsearch',
		title: `Alfred Global Search`,
		link: '/wagepoint-alfred-search',
		description: 'Improving global search to help internal support agents find the information they need faster.',
		image: AlfredSearch,
		role: 'UX Designer & Developer',
		size: 'w-full md:w-4/6',
		tags: ['Internal tools'],
		category: 'selectedWork',
		impact: [
			'Made key customer information easier to find',
		]
	},
	{
		id: 'qcdt',
		title: 'Queer Club Directory Toronto',
		link: '/queer-club-directory',
		description:
			'Making queer communities more discoverable through a centralized, easy-to-navigate directory.',
		image: Qcdt,
		role: 'Interaction Designer & Developer',
		tags: ['UX Design', 'Front-end Development'],
		size: 'w-full md:w-2/6',
		category: 'selectedWork',
	},
	{
		id: 'tpol',
		title: 'The Price of Life',
		link: '/the-price-of-life',
		description:
			'Increasing financial literacy in 10th Graders through the intersection of board game and technology',
		image: Tpol,
		role: 'Interaction Designer & Developer',
		size: 'w-full md:w-4/6',
		category: 'archive',
	},
	{
		id: 'schroeder',
		title: `Schroeder’s piano`,
		link: '/schroeders-piano',
		description:
			'Creating an interactive piano experience for a Snoopy-themed exhibit',
		image: Peanuts,
		role: 'Interaction Designer & Developer',
		size: 'w-full md:w-1/2',
		category: 'archive',
	},
	{
		id: 'tippt',
		title: 'Tippt',
		link: '/tippt',
		description:
			'Creating a sustainable platform to help users make sustainable restaurant choices',
		image: Tippt,
		role: 'UX Designer',
		size: 'w-full md:w-1/2',
		category: 'archive',
	},
	{
		id: 'splinterD',
		title: 'Splinter Dimensional',
		link: '/splinter-dimensional',
		description:
			'An AR scavenger hunt adventure through a park in Toronto for Luminato festival',
		image: Sd,
		role: 'Interaction Designer & Developer',
		size: 'w-full md:w-4/6',
		category: 'archive',
	},
	{
		id: 'freshii',
		title: 'Super Mushroom filter',
		link: '/super-mushroom',
		description: `An Instagram filter of a mushroom haircut to promote Freshii’s Super Mushroom gummies`,
		image: Freshii,
		size: 'w-full md:w-2/6',
		category: 'archive',
	},
	// {
	// 	id: '',
	// 	title: '',
	// 	link: '/',
	// 	description: '',
	// 	image: <></>,
	// },
];

export default projectData;
