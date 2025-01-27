import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadNullableRelationFilterSchema: z.ZodType<Prisma.LeadNullableRelationFilter> = z.object({
  is: z.lazy(() => LeadWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => LeadWhereInputSchema).optional().nullable()
}).strict();

export default LeadNullableRelationFilterSchema;
