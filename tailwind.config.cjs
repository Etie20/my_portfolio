/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: {
		relative: true,
		transform: (content) => content.replace(/taos:/g, ''),
		files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
		// ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}']
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
				mono: ['monospace']
			}
		},
	},
	safelist: [
		'!duration-[0ms]',
		'!delay-[0ms]',
		'html.js :where([class*="taos:"]:not(.taos-init))'
	],
	plugins: [
		require('tailwindcss-animated'),
		require('taos/plugin'),
		require('tailwind-animatecss')
	],
}
