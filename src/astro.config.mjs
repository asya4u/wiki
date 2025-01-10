// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
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
