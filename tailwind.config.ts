import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		borderRadius: {
			none: '0',
			DEFAULT: '10px',
			lg: '20px',
			full: '9999px',
		},
		colors: {
			black: '#242424',
			white: '#FAFAFA',
			gray: {
				100: '#f5f5f5',
				200: '#ececec',
				600: '#4b4b4b',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
export default config;
