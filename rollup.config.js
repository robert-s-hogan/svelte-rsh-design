import svelte from 'rollup-plugin-svelte';
import image from 'svelte-image';
import copy from 'rollup-plugin-copy';

export default {
	plugins: [
		svelte({
			preprocess: image({ placeholder: 'trace' })
		}),
		copy({
			targets: [{ src: 'static/g', dest: 'public' }]
		})
	]
};
