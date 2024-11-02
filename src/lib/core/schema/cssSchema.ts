import { z } from 'zod';
import { MediaUtilitySchema } from './utilsSchema.js';
import { colorsSchema } from './colorsSchema.js';
import { sizesSchema } from './sizesSchema.js';

// ShorthandCSSProps schema
export const ShorthandCSSPropsSchema = z.object({
	bgColor: MediaUtilitySchema(colorsSchema),
	w: MediaUtilitySchema(sizesSchema),
	h: MediaUtilitySchema(sizesSchema),
	bg: z.string(),
	py: MediaUtilitySchema(sizesSchema),
	px: MediaUtilitySchema(sizesSchema),
	pl: MediaUtilitySchema(sizesSchema),
	pb: MediaUtilitySchema(sizesSchema),
	pr: MediaUtilitySchema(sizesSchema),
	pt: MediaUtilitySchema(sizesSchema),
	p: MediaUtilitySchema(sizesSchema)
});

// LongCSSProps schema
export const LongCSSPropsSchema = z.object({
	color: MediaUtilitySchema(colorsSchema),
	backgroundColor: MediaUtilitySchema(colorsSchema),
	width: MediaUtilitySchema(sizesSchema),
	background: z.string(),
	maxWidth: MediaUtilitySchema(sizesSchema),
	padding: MediaUtilitySchema(sizesSchema),
	margin: MediaUtilitySchema(sizesSchema),
	paddingTop: MediaUtilitySchema(sizesSchema),
	paddingLeft: MediaUtilitySchema(sizesSchema),
	paddingRight: MediaUtilitySchema(sizesSchema),
	paddingBottom: MediaUtilitySchema(sizesSchema),
	paddingY: MediaUtilitySchema(sizesSchema),
	paddingX: MediaUtilitySchema(sizesSchema),
	height: MediaUtilitySchema(sizesSchema)
});

const longAndShorthandIntersectionSchema = z.object({
	...ShorthandCSSPropsSchema.shape,
	...LongCSSPropsSchema.shape
});

export const cssSchema = z.object({
	...longAndShorthandIntersectionSchema.shape
});
