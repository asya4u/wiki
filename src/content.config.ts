import { defineCollection } from 'astro:content';
import { docsLoader } from './loaders';
import { docsSchema } from './schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
