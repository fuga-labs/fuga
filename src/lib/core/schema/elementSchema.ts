import { z } from 'zod';

let elementsEnum = z.enum([
	'a',
	'div',
	'button',
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	'p',
	'span',
	'figure'
]);

export let elementSchema = z.object({
	as: elementsEnum
});
