import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkTagWhereInputSchema } from './LinkTagWhereInputSchema';

export const LinkTagListRelationFilterSchema: z.ZodType<Prisma.LinkTagListRelationFilter> = z.object({
  every: z.lazy(() => LinkTagWhereInputSchema).optional(),
  some: z.lazy(() => LinkTagWhereInputSchema).optional(),
  none: z.lazy(() => LinkTagWhereInputSchema).optional()
}).strict();

export default LinkTagListRelationFilterSchema;
