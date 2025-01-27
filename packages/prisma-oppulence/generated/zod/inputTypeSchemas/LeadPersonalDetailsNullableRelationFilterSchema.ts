import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadPersonalDetailsWhereInputSchema } from './LeadPersonalDetailsWhereInputSchema';

export const LeadPersonalDetailsNullableRelationFilterSchema: z.ZodType<Prisma.LeadPersonalDetailsNullableRelationFilter> = z.object({
  is: z.lazy(() => LeadPersonalDetailsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => LeadPersonalDetailsWhereInputSchema).optional().nullable()
}).strict();

export default LeadPersonalDetailsNullableRelationFilterSchema;
