/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		target: '#svelte',
		vite: {
			optimizeDeps: {
				include: ["highlight.js/lib/core"],
			},
		},
	}
};

export default config;
