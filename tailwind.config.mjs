/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					green: "#014E56",
					coral: "#F67E7E",
				},
				white: "#ffffff",
				secondary: {
					"green-400": "#79C8C7",
					"green-500": "#2C6269",
					"green-600": "#004047",
					"green-700": "#012F34",
					"green-900": "#002529",
				},
			},
		},
	},
	plugins: [],
};
