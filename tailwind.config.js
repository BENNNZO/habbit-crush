/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				'text': '#e5e0f4',
				'background': '#05040b',
				'primary': '#aa96e5',
				'secondary': '#361b87',
				'accent': '#6239de',
			},
		},
	},
	plugins: [],
};
