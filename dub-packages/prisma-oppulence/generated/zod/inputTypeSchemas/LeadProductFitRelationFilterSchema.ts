import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadProductFitWhereInputSchema } from './LeadProductFitWhereInputSchema';

export const LeadProductFitRelationFilterSchema: z.ZodType<Prisma.LeadProductFitRelationFilter> = z.object({
  is: z.lazy(() => LeadProductFitWhereInputSchema).optional(),
  isNot: z.lazy(() => LeadProductFitWhereInputSchema).optional()
}).strict();

export default LeadProductFitRelationFilterSchema;
