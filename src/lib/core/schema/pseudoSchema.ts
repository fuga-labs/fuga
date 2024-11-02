import { z } from 'zod';

const PseudoSelectorEnum = z.enum([
	'_hover',
	'_focus',
	'_active',
	'_disabled',
	'_visited',
	'_target',
	'__before',
	'__after',
	'__first-letter',
	'__first-line',
	'__selection'
]);

export const pseudoSchema = PseudoSelectorEnum;
