// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://asya4u.github.io",
	base: "wiki",
	integrations: [
		starlight({
			title: 'Asya docs',
			social: {
				github: 'https://github.com/asya4u',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: {directory: "guides"}
				}
			],
		}),
	],
});
