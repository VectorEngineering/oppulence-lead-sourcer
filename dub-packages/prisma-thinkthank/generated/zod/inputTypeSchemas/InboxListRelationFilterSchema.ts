import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxWhereInputSchema } from './InboxWhereInputSchema';

export const InboxListRelationFilterSchema: z.ZodType<Prisma.InboxListRelationFilter> = z.object({
  every: z.lazy(() => InboxWhereInputSchema).optional(),
  some: z.lazy(() => InboxWhereInputSchema).optional(),
  none: z.lazy(() => InboxWhereInputSchema).optional()
}).strict();

export default InboxListRelationFilterSchema;
