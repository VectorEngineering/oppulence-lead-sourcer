import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadRelationFilterSchema: z.ZodType<Prisma.LeadRelationFilter> = z.object({
  is: z.lazy(() => LeadWhereInputSchema).optional(),
  isNot: z.lazy(() => LeadWhereInputSchema).optional()
}).strict();

export default LeadRelationFilterSchema;
