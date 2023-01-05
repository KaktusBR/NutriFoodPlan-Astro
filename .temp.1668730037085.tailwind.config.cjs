/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				nutriGreen: {
					100: '#D4FDEB',
					200: '#22622C',
					300: '#31E179',
				  },
				nutriPink: {
					100: '#e6007e',
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	  ],
}
