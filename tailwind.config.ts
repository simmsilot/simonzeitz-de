import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				body: ["Montserrat", "sans-serif"],
				title: ["Vina Sans", "sans"]
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
