import { z } from 'zod';

export const displaySchema = z.enum([
	'flex',
	'block',
	'inline-block',
	'inline-flex',
	'table',
	'inline-table',
	'table-caption',
	'table-column',
	'table-column-group',
	'table-footer-group',
	'table-header-group',
	'table-row-group',
	'table-row',
	'flow-root',
	'grid',
	'inline-grid',
	'contents',
	'list-item',
	'hidden'
]);
