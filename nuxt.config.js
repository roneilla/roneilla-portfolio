export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	router: {
		base: '/roneilla.github.io/',
	},
	//  https://nuxtjs.org/deployments/github-pages/

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'portfolio-2021',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://use.typekit.net/wiz3scy.css' },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/assets/css/main.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '@/plugins/aos', mode: 'client' },
		{ src: '@/plugins/cursorFx' },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		'@nuxt/postcss8',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	purgeCSS: {
		whitelist: [
			'aos-init',
			'aos-animate',
			'data-aos-delay',
			'data-aos-duration',
			'fade-up',
			'zoom-in',
		],
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {},
			},
		},
	},
};
