import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SentEmailWhereInputSchema } from './SentEmailWhereInputSchema';

export const SentEmailListRelationFilterSchema: z.ZodType<Prisma.SentEmailListRelationFilter> = z.object({
  every: z.lazy(() => SentEmailWhereInputSchema).optional(),
  some: z.lazy(() => SentEmailWhereInputSchema).optional(),
  none: z.lazy(() => SentEmailWhereInputSchema).optional()
}).strict();

export default SentEmailListRelationFilterSchema;
