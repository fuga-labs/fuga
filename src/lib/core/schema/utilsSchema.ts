import { z } from 'zod';
import { MediaSchema } from './mediaSchema.js';

export const fallbackSchema = z.intersection(z.string(), z.object({}));

export const MediaUtilitySchema = <T>(schema: z.ZodType<T>) => {
	return z.union([z.record(MediaSchema, schema), schema, fallbackSchema]);
};
