import { z } from 'zod';

export const borderSchema = z.enum(['solid', 'dashed', 'dotted', 'double', 'hidden', 'none']);
