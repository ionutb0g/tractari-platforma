const defaultTheme = require("tailwindcss/defaultTheme");


/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	
		extend: {
			fontFamily: {
				sans: ["Verdana", "Montserrat", ...defaultTheme.fontFamily.sans],
			  },
			  screens: {
				'xs': '360px'
			  },
			  keyframes: {
				"fade-in": {
				  '0%': { opacity: '0%',
				//   transform:'translateY(100%)',
				},
				  '100%': { 
					opacity: '100%',
					// transform:'translateY(0%)',
				},
				}
			  },
			  animation: {
				"fade-in": 'fade-in 0.5s ease-in-out',
			  } 
		},
	},
	plugins: [],
}
