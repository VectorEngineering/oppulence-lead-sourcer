import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCategoryWhereInputSchema } from './LeadCategoryWhereInputSchema';

export const LeadCategoryListRelationFilterSchema: z.ZodType<Prisma.LeadCategoryListRelationFilter> = z.object({
  every: z.lazy(() => LeadCategoryWhereInputSchema).optional(),
  some: z.lazy(() => LeadCategoryWhereInputSchema).optional(),
  none: z.lazy(() => LeadCategoryWhereInputSchema).optional()
}).strict();

export default LeadCategoryListRelationFilterSchema;
