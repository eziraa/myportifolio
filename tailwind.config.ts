import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
	theme: {
		
		container: {
			center: true,
			padding: '15px',
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1280px'
		},
		fontFamily: {
			primary: 'var(--font-jetbrainsMono)',
		},
		extend: {
			colors: {
				primary: '#1c1c12',
				accent: {
					DEFAULT: '#00FF99',
					hover: '#00E187'
				}

			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			
		},
		plugins: [tailwindcssAnimate],
	}
};
export default config;
