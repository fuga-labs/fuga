import { colorsSchema } from '$lib/core/schema/colorsSchema.js';
import { cssSchema, LongCSSPropsSchema } from '$lib/core/schema/cssSchema.js';
import { sizesSchema } from '$lib/core/schema/sizesSchema.js';

import type { z } from 'zod';
import type { elementSchema } from '$lib/core/schema/elementSchema.js';
import type { pseudoSchema } from '$lib/core/schema/pseudoSchema.js';

export type Colors = z.infer<typeof colorsSchema>;
export type LongCSSProps = z.infer<typeof LongCSSPropsSchema>;
export type Sizes = z.infer<typeof sizesSchema>;
export type cssPropsType = z.infer<typeof cssSchema>;
export type elementType = z.infer<typeof elementSchema>;
export type pseudoType = z.infer<typeof pseudoSchema>;
export type BasePropsType = cssPropsType & elementType;
