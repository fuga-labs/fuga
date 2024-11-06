import { z } from 'zod';

export const flexDirectionSchema = z.enum(['row', 'row-reverse', 'column', 'column-reverse']);

export const justifyContentSchema = z.enum([
	'normal',
	'flex-start',
	'flex-end',
	'center',
	'space-between',
	'space-around',
	'space-evenly',
	'stretch'
]);

export const justifyItemsSchema = z.enum(['start', 'end', 'center', 'stretch']);
export const justifySelfSchema = z.enum(['start', 'end', 'center', 'stretch', 'auto']);

export const alignContentSchema = z.enum([
	'normal',
	'flex-start',
	'flex-end',
	'center',
	'space-between',
	'space-around',
	'space-evenly',
	'stretch',
	'baseline'
]);

export const alignItemsSchema = z.enum(['baseline', 'flex-start', 'flex-end', 'center', 'stretch']);

export const flexWrapSchema = z.enum(['wrap', 'wrap-reverse', 'nowrap']);
