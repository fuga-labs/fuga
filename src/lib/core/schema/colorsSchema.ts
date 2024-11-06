import * as z from 'zod';
import { fallbackSchema } from './utilsSchema.js';
import { extendColorsSchema } from './extendedSchema.js';

const roseSchema = z.enum([
	'rose-50',
	'rose-100',
	'rose-200',
	'rose-300',
	'rose-400',
	'rose-500',
	'rose-600',
	'rose-700',
	'rose-800',
	'rose-900',
	'rose-950'
]);
const redSchema = z.enum([
	'red-50',
	'red-100',
	'red-200',
	'red-300',
	'red-400',
	'red-500',
	'red-600',
	'red-700',
	'red-800',
	'red-900',
	'red-950'
]);
const graySchema = z.enum([
	'gray-50',
	'gray-100',
	'gray-200',
	'gray-300',
	'gray-400',
	'gray-500',
	'gray-600',
	'gray-700',
	'gray-800',
	'gray-900',
	'gray-950'
]);
const yellowSchema = z.enum([
	'yellow-50',
	'yellow-100',
	'yellow-200',
	'yellow-300',
	'yellow-400',
	'yellow-500',
	'yellow-600',
	'yellow-700',
	'yellow-800',
	'yellow-900',
	'yellow-950'
]);
const greenSchema = z.enum([
	'green-50',
	'green-100',
	'green-200',
	'green-300',
	'green-400',
	'green-500',
	'green-600',
	'green-700',
	'green-800',
	'green-900',
	'green-950'
]);
const blueSchema = z.enum([
	'blue-50',
	'blue-100',
	'blue-200',
	'blue-300',
	'blue-400',
	'blue-500',
	'blue-600',
	'blue-700',
	'blue-800',
	'blue-900',
	'blue-950'
]);

let extendschema = extendColorsSchema();

export const colorsSchema = z.union([
	roseSchema,
	redSchema,
	graySchema,
	yellowSchema,
	greenSchema,
	blueSchema,
	fallbackSchema,
	extendschema
]);
